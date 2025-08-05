import { useThemeColor } from "../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./MenuPageSkeleton.module.css";
import classNames from "classnames";

export default function MenuPageSkeleton() {
  const { themeColor } = useThemeColor();

  return (
    <div
      className={classNames(
        styles["menu-section"],
        styles[`menu-section--theme-color-${themeColor}`]
      )}
    >
      <div className={styles["skeleton-title"]} />
      <ul className={styles["skeleton-list"]}>
        {[...Array(3)].map((_, index) => (
          <li
            key={index}
            className={classNames(
              styles["skeleton-item"],
              styles[`skeleton-item--theme-color-${themeColor}`]
            )}
          >
            <div className={styles["skeleton-dish-name"]} />
            <div className={styles["skeleton-button"]} />
          </li>
        ))}
      </ul>
    </div>
  );
}
