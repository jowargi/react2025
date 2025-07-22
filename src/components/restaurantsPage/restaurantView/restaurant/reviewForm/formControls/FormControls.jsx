import { useThemeColor } from "../../../../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./FormControls.module.css";
import classNames from "classnames";

export default function FormControls({ onClear, onSubmit }) {
  const { themeColor } = useThemeColor();

  return (
    <div
      className={classNames(
        styles["form-controls"],
        styles[`form-controls--theme-color-${themeColor}`]
      )}
    >
      <input
        type="button"
        value="Clear"
        onClick={onClear}
        className={classNames(
          styles.button,
          styles[`button--theme-color-${themeColor}`]
        )}
      />
      <input
        type="submit"
        value="Submit"
        onClick={onSubmit}
        className={classNames(
          styles.button,
          styles["button--submit"],
          styles[`button--submit--theme-color-${themeColor}`]
        )}
      />
    </div>
  );
}
