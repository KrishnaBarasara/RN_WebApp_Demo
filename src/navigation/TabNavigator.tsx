import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import HomeScreen from "../app/screens/HomeScreen";
import NotificationsScreen from "../app/screens/NotificationsScreen";
import ProfileScreen from "../app/screens/ProfileScreen";
import SettingsScreen from "../app/screens/SettingsScreen";
import { ThemeContext } from "../context/ThemeContext";
import { DarkTheme, LightTheme } from "../theme/themeColors";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const { theme } = useContext(ThemeContext);
  const colors = theme === "light" ? LightTheme : DarkTheme;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.tabBg,
        },
        headerTitleStyle: {
          color: colors.text,
        },
        tabBarStyle: {
          backgroundColor: colors.tabBg,
          borderTopColor: colors.tabBorder,
        },
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: theme === "light" ? "#888" : "#bbb",
      }}
    >
      <Tab.Screen
        name="Homes"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ),
        }}
        component={NotificationsScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color={color} />
          ),
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
