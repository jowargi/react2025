import { useThemeColor } from "../../../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./RestaurantNavigation.module.css";
import classNames from "classnames";
import RestaurantNavigationLink from "./restaurantNavigationLink/RestaurantNavigationLink";

export default function RestaurantNavigation() {
  const { themeColor } = useThemeColor();

  return (
    <nav
      className={classNames(
        styles.nav,
        styles[`nav--theme-color-${themeColor}`]
      )}
    >
      <RestaurantNavigationLink to="menu">Menu</RestaurantNavigationLink>
      <RestaurantNavigationLink to="reviews">Reviews</RestaurantNavigationLink>
    </nav>
  );
}
