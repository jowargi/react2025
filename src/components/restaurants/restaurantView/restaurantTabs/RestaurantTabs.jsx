import { useThemeColor } from "../../../themeColorContextProvider/ThemeColorContextProvider";
import RestaurantTabContainer from "./restaurantTab/RestaurantTabContainer";
import styles from "./RestaurantTabs.module.css";
import classNames from "classnames";

export default function RestaurantTabs({ restaurantsIds }) {
  const { themeColor } = useThemeColor();

  return (
    <nav
      className={classNames(
        styles["tabs-container"],
        styles[`tabs-container--theme-color-${themeColor}`]
      )}
    >
      {restaurantsIds.map((restaurantId) => (
        <RestaurantTabContainer
          key={restaurantId}
          restaurantId={restaurantId}
        />
      ))}
    </nav>
  );
}
