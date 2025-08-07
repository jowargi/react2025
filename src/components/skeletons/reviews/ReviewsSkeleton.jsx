import { useThemeColor } from "../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./ReviewsSkeleton.module.css";
import classNames from "classnames";

export default function ReviewsSkeleton({ reviewsTotal }) {
  const { themeColor } = useThemeColor();

  return (
    <ul className={styles["reviews-skeleton"]}>
      {[...Array(reviewsTotal)].map((_, index) => (
        <li
          key={index}
          className={classNames(
            styles["review-skeleton"],
            styles[`review-skeleton--theme-color-${themeColor}`]
          )}
        >
          <div className={styles["user-skeleton"]} />
          <div className={styles["text-skeleton"]} style={{ width: "80%" }} />
        </li>
      ))}
    </ul>
  );
}
