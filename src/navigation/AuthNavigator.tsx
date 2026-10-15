import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../app/screens/SignInScreen";
import SignUpScreen from "../app/screens/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
