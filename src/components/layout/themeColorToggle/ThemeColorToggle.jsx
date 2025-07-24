import { useThemeColor } from "../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./ThemeColorToggle.module.css";
import classNames from "classnames";

export default function ThemeColorToggle() {
  const { themeColor, setLightTheme, setDarkTheme } = useThemeColor();

  return (
    <button
      onClick={() =>
        themeColor === "light" ? setDarkTheme() : setLightTheme()
      }
      className={classNames(styles.toggle, styles[`toggle--${themeColor}`])}
    >
      {themeColor === "light" ? "☾" : themeColor === "dark" ? "☀" : "◑"}
    </button>
  );
}
