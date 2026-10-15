import { NavigationContainer } from "@react-navigation/native";
import ErrorBoundary from "../components/ErrorBoundary";
import RootNavigator from "./RootNavigator";

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <ErrorBoundary>
        <RootNavigator />
      </ErrorBoundary>
    </NavigationContainer>
  );
}
