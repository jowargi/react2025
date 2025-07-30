import { NavLink } from "react-router-dom";
import styles from "./RestaurantNavigationLink.module.css";
import classNames from "classnames";
import { useThemeColor } from "../../../../../themeColorContextProvider/ThemeColorContextProvider";

export default function RestaurantNavigationLink({ children, to }) {
  const { themeColor } = useThemeColor();

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.link, styles[`link--theme-color-${themeColor}`], {
          [styles["link--active"]]: !isActive,
          [styles[`link--active--theme-color-${themeColor}`]]: !isActive,
          [styles["link--disabled"]]: isActive,
          [styles[`link--disabled--theme-color-${themeColor}`]]: isActive,
        })
      }
    >
      {children}
    </NavLink>
  );
}
