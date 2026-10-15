import React, { createContext, useEffect, useState } from "react";
import { Storage } from "../store/storage";

export const AuthContext = createContext({
  user: null,
  loading: true,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const stored = await Storage.getItem("user");
      if (stored) setUser(stored);
      setLoading(false);
    };
    loadUser();
  }, []);

  const signIn = async (email: string) => {
    await Storage.setItem("user", email);
    setUser(email);
  };

  const signUp = async (email: string) => {
    await Storage.setItem("user", email);
    setUser(email);
  };

  const signOut = async () => {
    await Storage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
