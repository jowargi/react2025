import styles from "./ReviewListItem.module.css";
import classNames from "classnames";
import { useThemeColor } from "../../../../../themeColorContextProvider/ThemeColorContextProvider";

export default function ReviewListItem({ review }) {
  const { themeColor } = useThemeColor();

  return (
    <li
      className={classNames(
        styles["review-item"],
        styles[`review-item--theme-color-${themeColor}`]
      )}
    >
      <p
        className={classNames(
          styles["review-text"],
          styles[`review-text--theme-color-${themeColor}`]
        )}
      >
        {review.text}
      </p>
    </li>
  );
}
