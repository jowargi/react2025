import { useUser } from "../../../../userContextProvider/UserContextProvider";
import { useThemeColor } from "../../../../themeColorContextProvider/ThemeColorContextProvider";
import { useCallback } from "react";
import { userMock } from "../../../../../constants/userMock";
import styles from "./AuthButton.module.css";
import classNames from "classnames";

export default function AuthButton() {
  const { user, login, logout } = useUser();
  const { themeColor } = useThemeColor();

  const onClick = useCallback(
    () => (user ? logout() : login(userMock)),
    [user, login, logout]
  );

  return (
    <button
      onClick={onClick}
      className={classNames(
        styles.button,
        styles[`button--theme-color-${themeColor}`]
      )}
    >
      {user ? "Log Out" : "Log In"}
    </button>
  );
}
