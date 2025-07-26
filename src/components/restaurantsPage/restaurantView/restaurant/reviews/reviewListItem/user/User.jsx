import { useThemeColor } from "../../../../../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./User.module.css";
import classNames from "classnames";

export default function User({ name }) {
  const { themeColor } = useThemeColor();

  return (
    <p
      className={classNames(styles.user, {
        [styles["user--theme-color-light"]]: themeColor === "light",
        [styles["user--theme-color-dark"]]: themeColor === "dark",
      })}
    >
      {name}
    </p>
  );
}
