import { View, Text, Button } from "react-native";

export default function ErrorBoundaryScreen({ message }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Something went wrong
      </Text>
      <Text>{message}</Text>
      <Button
        title="Restart App"
        onPress={() => {
          location.reload();
        }}
      />
    </View>
  );
}
