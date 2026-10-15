import { useAuthStore } from "@/src/store/Zustand/authStore";
import { Button, Text, View } from "react-native";

export default function SignOutScreen() {
  const logout = useAuthStore((s) => s.signOut);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Are you sure you want to sign out?
      </Text>

      <Button title="Sign Out" onPress={logout} />
    </View>
  );
}
