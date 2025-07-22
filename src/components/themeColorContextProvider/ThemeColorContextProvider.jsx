import { createContext, useContext, useState } from "react";

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

  return (
    <ThemeColorContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeColorContext.Provider>
  );
}
