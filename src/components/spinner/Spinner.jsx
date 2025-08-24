import { useThemeColor } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./Spinner.module.css";
import classNames from "classnames";

export default function Spinner() {
  const { themeColor } = useThemeColor();

  return (
    <div className={styles["spinner-outer"]}>
      <div
        className={classNames(
          styles["spinner-inner"],
          styles[`spinner-inner--theme-color-${themeColor}`]
        )}
      />
    </div>
  );
}
