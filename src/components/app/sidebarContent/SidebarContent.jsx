import { useThemeColor } from "../../themeColorContextProvider/ThemeColorContextProvider";
import { useUser } from "../../userContextProvider/UserContextProvider";
import styles from "./SidebarContent.module.css";
import classNames from "classnames";
import SidebarLink from "./sidebarLink/SidebarLink";

export default function SidebarContent() {
  const { themeColor } = useThemeColor();
  const { user } = useUser();

  return (
    <div
      className={classNames(
        styles["sidebar-content"],
        styles[`sidebar-content--theme-color-${themeColor}`]
      )}
    >
      <div
        className={classNames(
          styles.links,
          styles[`links--theme-color-${themeColor}`]
        )}
      >
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="/restaurants">Restaurants</SidebarLink>
        {user && <SidebarLink to="/cart">Cart</SidebarLink>}
      </div>
    </div>
  );
}
