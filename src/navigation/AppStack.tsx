import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignOutScreen from "../app/screens/SignOutScreen";
import TabNavigator from "./TabNavigator";

// Extra screens that you open from tabs

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      {/* Tabs as root */}
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />

      {/* Extra screens */}
      <Stack.Screen name="SignOut" component={SignOutScreen} />
    </Stack.Navigator>
  );
}
