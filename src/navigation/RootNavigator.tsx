import React from "react";
import { useAuthStore } from "../store/Zustand/authStore";
import AppStack from "./AppStack";
import AuthNavigator from "./AuthNavigator";

export default function RootNavigator() {
  // Zustand rehydration flag
  const rehydrated = useAuthStore((state) => state.rehydrated);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  // ⛔ IMPORTANT: Wait until Zustand loads data from AsyncStorage
  // if (!rehydrated) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  // After rehydration: decide screen flow
  return isLoggedIn ? <AppStack /> : <AuthNavigator />;
}
