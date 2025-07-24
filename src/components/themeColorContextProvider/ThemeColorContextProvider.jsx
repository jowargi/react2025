import { createContext, useCallback, useContext, useState } from "react";

const ThemeColorContext = createContext({
  themeColor: "light",
  setThemeColor: () => null,
});

export const useThemeColor = () => useContext(ThemeColorContext);

export default function ThemeColorContextProvider({
  children,
  initialThemeColor = "light",
}) {
  const [themeColor, setThemeColor] = useState(initialThemeColor);

  const setLightTheme = useCallback(
    () => setThemeColor("light"),
    [setThemeColor]
  );

  const setDarkTheme = useCallback(
    () => setThemeColor("dark"),
    [setThemeColor]
  );

  return (
    <ThemeColorContext.Provider
      value={{ themeColor, setLightTheme, setDarkTheme }}
    >
      {children}
    </ThemeColorContext.Provider>
  );
}
