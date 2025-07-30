import AuthStatusControl from "./authStatusControl/AuthStatusControl";
import { useThemeColor } from "../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./HeaderContent.module.css";
import classNames from "classnames";

export default function HeaderContent() {
  const { themeColor } = useThemeColor();
  return (
    <div
      className={classNames(
        styles["header-content"],
        styles[`header-content--theme-color-${themeColor}`],
        styles.clearfix
      )}
    >
      <AuthStatusControl />
      <h1
        className={classNames(
          styles.title,
          styles[`title--theme-color-${themeColor}`]
        )}
      >
        Restaurant App
      </h1>
    </div>
  );
}
