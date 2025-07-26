import styles from "./ReviewListItem.module.css";
import classNames from "classnames";
import { useThemeColor } from "../../../../../themeColorContextProvider/ThemeColorContextProvider";
import UserContainer from "./user/UserContainer";

export default function ReviewListItem({ userId, text }) {
  const { themeColor } = useThemeColor();

  return (
    <li
      className={classNames(
        styles["review-item"],
        styles[`review-item--theme-color-${themeColor}`]
      )}
    >
      <UserContainer id={userId} />
      <p
        className={classNames(
          styles["review-text"],
          styles[`review-text--theme-color-${themeColor}`]
        )}
      >
        {text}
      </p>
    </li>
  );
}
