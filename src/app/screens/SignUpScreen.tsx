import { AuthContext } from "@/src/context/AuthContext";
import React, { useContext, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function SignUpScreen({ navigation }: any) {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1 }}
      />

      <Text>Password</Text>
      <TextInput
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={{ borderWidth: 1 }}
      />

      <Button title="Sign Un" onPress={() => signIn(email, password)} />

      <Text onPress={() => navigation.navigate("SignUp")}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
}
