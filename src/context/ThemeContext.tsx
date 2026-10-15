import React, { createContext, useState, useEffect } from "react";
import { Appearance } from "react-native";

export type ThemeMode = "light" | "dark" | "system";

interface ThemeContextType {
  theme: "light" | "dark";
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  themeMode: "system",
  setThemeMode: () => {},
});

export const ThemeProvider = ({ children }: any) => {
  const colorScheme = Appearance.getColorScheme(); // phone setting: light | dark
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");

  const theme = themeMode === "system" ? colorScheme || "light" : themeMode;

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (themeMode === "system") {
        // auto update on phone theme change
      }
    });
    return () => subscription.remove();
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ theme, themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
