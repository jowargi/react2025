import { useThemeColor } from "../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./ThemeColorToggle.module.css";
import classNames from "classnames";

export default function ThemeColorToggle() {
  const { themeColor, setThemeColor } = useThemeColor();

  return (
    <button
      onClick={() => {
        setThemeColor(themeColor === "light" ? "dark" : "light");
      }}
      className={classNames(styles.toggle, styles[`toggle--${themeColor}`])}
    >
      {themeColor === "light" ? "☾" : themeColor === "dark" ? "☀" : "◑"}
    </button>
  );
}
