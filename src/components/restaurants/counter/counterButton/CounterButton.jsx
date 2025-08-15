import styles from "./CounterButton.module.css";
import classNames from "classnames";
import { useThemeColor } from "../../../themeColorContextProvider/ThemeColorContextProvider";

export default function CounterButton({ text, onClick }) {
  const { themeColor } = useThemeColor();

  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        styles.button,
        styles[`button--theme-color-${themeColor}`]
      )}
    >
      {text}
    </button>
  );
}
