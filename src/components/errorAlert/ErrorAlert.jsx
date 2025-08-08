import { useThemeColor } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./ErrorAlert.module.css";
import classNames from "classnames";

export default function ErrorAlert({ name, message }) {
  const { themeColor } = useThemeColor();

  return (
    <div
      className={classNames(
        styles.error,
        styles[`error--theme-color-${themeColor}`]
      )}
    >
      <h4
        className={classNames(
          styles["error-name"],
          styles[`error-name--theme-color-${themeColor}`]
        )}
      >
        {name}
      </h4>
      <p
        className={classNames(
          styles["error-message"],
          styles[`error-message--theme-color-${themeColor}`]
        )}
      >
        {message}
      </p>
    </div>
  );
}
