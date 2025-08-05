import { useThemeColor } from "../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./UserSkeleton.module.css";
import classNames from "classnames";

export default function UserSkeleton() {
  const { themeColor } = useThemeColor();

  return (
    <div
      className={classNames(
        styles["user-skeleton"],
        styles[`user-skeleton--theme-color-${themeColor}`]
      )}
    />
  );
}
