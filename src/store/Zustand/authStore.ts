// authStore.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import type { StateCreator } from "zustand";
import { create } from "zustand";

/* ------------------------------------------------------------
   1) Web-safe storage wrapper (NO window/localStorage issues)
------------------------------------------------------------ */

const webStorage = {
  getItem: (key: string) => {
    if (typeof window === "undefined") return null; // SSR safety
    return window.localStorage.getItem(key);
  },
  setItem: (key: string, value: string) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, value);
  },
  removeItem: (key: string) => {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(key);
  },
};

/* ------------------------------------------------------------
   2) Type for any storage implementation
------------------------------------------------------------ */

export type StorageLike = {
  getItem: (key: string) => Promise<string | null> | string | null;
  setItem: (key: string, value: string) => Promise<void> | void;
  removeItem?: (key: string) => Promise<void> | void;
};

/* ------------------------------------------------------------
   3) Custom persist function (Zustand middleware)
------------------------------------------------------------ */

export function zustandPersist<T extends object>(
  key: string,
  storage: StorageLike
) {
  return (config: StateCreator<T>): StateCreator<T> => {
    return (set, get, api) => {
      // Initialize original Zustand state
      const initialState = config(set, get, api);

      // --- HYDRATE STORE ---
      Promise.resolve(storage.getItem(key)).then((raw) => {
        if (!raw) return;
        try {
          const parsed = JSON.parse(raw);
          set(parsed); // restore state
        } catch {}
      });

      // --- SAVE ON EVERY STATE CHANGE ---
      const saveState = () => {
        const state = get();
        storage.setItem(key, JSON.stringify(state));
      };

      // Wrap Zustand's set()
      const wrappedSet: typeof set = (partial, replace) => {
        set(partial as any, replace);
        saveState(); // persist
      };

      return config(wrappedSet, get, api);
    };
  };
}

/* ------------------------------------------------------------
   4) Auth Store using the custom persist middleware
------------------------------------------------------------ */

interface AuthState {
  user: string | null;
  isLoggedIn: boolean;
  rehydrated: boolean;
  signIn: (email: string) => void;
  signOut: () => void;
}

const storage: StorageLike = Platform.OS === "web" ? webStorage : AsyncStorage;

export const useAuthStore = create<AuthState>()(
  zustandPersist<AuthState>(
    "auth-storage",
    storage
  )((set) => ({
    user: null,
    isLoggedIn: false,
    rehydrated: false,

    signIn: (email) => {
      set({ user: email, isLoggedIn: true });
    },

    signOut: () => {
      set({ user: null, isLoggedIn: false });
    },
  }))
);
