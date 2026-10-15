import { ThemeContext } from "@/src/context/ThemeContext";
import { DarkTheme, LightTheme } from "@/src/theme/themeColors";
import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  const { theme, themeMode, setThemeMode } = useContext(ThemeContext);
  const colors = theme === "light" ? LightTheme : DarkTheme;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: colors.text, fontSize: 20, marginBottom: 20 }}>
        Select Theme
      </Text>

      <TouchableOpacity
        onPress={() => setThemeMode("light")}
        style={{
          padding: 15,
          marginVertical: 10,
          backgroundColor: colors.tabBg,
          width: 200,
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <Text style={{ color: colors.text }}>Light</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setThemeMode("dark")}
        style={{
          padding: 15,
          marginVertical: 10,
          backgroundColor: colors.tabBg,
          width: 200,
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <Text style={{ color: colors.text }}>Dark</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setThemeMode("system")}
        style={{
          padding: 15,
          marginVertical: 10,
          backgroundColor: colors.tabBg,
          width: 200,
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <Text style={{ color: colors.text }}>System Default</Text>
      </TouchableOpacity>
    </View>
  );
}
