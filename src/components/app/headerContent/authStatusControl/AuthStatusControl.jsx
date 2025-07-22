import { useUser } from "../../../userContextProvider/UserContextProvider";
import { useThemeColor } from "../../../themeColorContextProvider/ThemeColorContextProvider";
import { useCallback } from "react";
import { userMock } from "../../../../constants/userMock";
import styles from "./AuthStatusControl.module.css";
import classNames from "classnames";

export default function AuthStatusControl() {
  const { user, setUser } = useUser();
  const { themeColor } = useThemeColor();

  const onClick = useCallback(
    () => (user ? setUser(null) : setUser(userMock)),
    [user, setUser]
  );

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
      <button
        onClick={onClick}
        className={classNames(
          styles.button,
          styles[`button--theme-color-${themeColor}`]
        )}
      >
        {user ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}
