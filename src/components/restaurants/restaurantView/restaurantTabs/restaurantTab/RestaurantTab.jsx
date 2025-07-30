import { NavLink } from "react-router-dom";
import { useThemeColor } from "../../../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./RestaurantTab.module.css";
import classNames from "classnames";

export default function RestaurantTab({ id, name }) {
  const { themeColor } = useThemeColor();

  return (
    <NavLink
      to={`/restaurants/${id}`}
      className={({ isActive }) =>
        classNames(styles.tab, styles[`tab--theme-color-${themeColor}`], {
          [styles["tab--disabled"]]: isActive,
          [styles[`tab--disabled--theme-color-${themeColor}`]]: isActive,
        })
      }
    >
      {name}
    </NavLink>
  );
}
