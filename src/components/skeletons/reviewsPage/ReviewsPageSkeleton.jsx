import { useThemeColor } from "../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./ReviewsPageSkeleton.module.css";
import classNames from "classnames";

export default function ReviewsPageSkeleton() {
  const { themeColor } = useThemeColor();

  return (
    <div
      className={classNames(
        styles["reviews-section"],
        styles[`reviews-section--theme-color-${themeColor}`]
      )}
    >
      <div className={styles["skeleton-title"]} />
      <ul className={styles["skeleton-list"]}>
        {[...Array(2)].map((_, index) => (
          <li
            key={index}
            className={classNames(
              styles["skeleton-item"],
              styles[`skeleton-item--theme-color-${themeColor}`]
            )}
          >
            <div className={styles["skeleton-user"]} />
            <div className={styles["skeleton-text"]} />
          </li>
        ))}
      </ul>
      <div className={styles["skeleton-button"]} />
    </div>
  );
}
