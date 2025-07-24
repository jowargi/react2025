import { useUser } from "../../../userContextProvider/UserContextProvider";
import { useThemeColor } from "../../../themeColorContextProvider/ThemeColorContextProvider";
import AuthButton from "./authButton/AuthButton";
import styles from "./AuthStatusControl.module.css";
import classNames from "classnames";

export default function AuthStatusControl() {
  const { user } = useUser();
  const { themeColor } = useThemeColor();

  return (
    <div
      className={classNames(
        styles.container,
        styles[`container--theme-color-${themeColor}`]
      )}
    >
      {user && (
        <p
          className={classNames(
            styles["user-name"],
            styles[`user-name--theme-color-${themeColor}`]
          )}
        >
          {user.name}
        </p>
      )}
      <AuthButton />
    </div>
  );
}
