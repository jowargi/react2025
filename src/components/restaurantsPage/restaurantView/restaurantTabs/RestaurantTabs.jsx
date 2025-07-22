import { useThemeColor } from "../../../themeColorContextProvider/ThemeColorContextProvider";
import RestaurantTab from "./restaurantTab/RestaurantTab";
import styles from "./RestaurantTabs.module.css";
import classNames from "classnames";

export default function RestaurantTabs({
  restaurants,
  activeRestaurant,
  setActiveRestaurant,
}) {
  const { themeColor } = useThemeColor();

  return (
    <div
      onClick={(event) => {
        return onClick(restaurants, setActiveRestaurant, event);
      }}
      className={classNames(
        styles["tabs-container"],
        styles[`tabs-container--theme-color-${themeColor}`]
      )}
    >
      {restaurants.map((restaurant) => (
        <RestaurantTab
          key={restaurant.id}
          restaurant={restaurant}
          isDisabled={restaurant.id === activeRestaurant.id}
        />
      ))}
    </div>
  );
}

function onClick(restaurants, setActiveRestaurant, event) {
  const restaurantId = event.target.dataset.restaurantId;

  if (!restaurantId) return;

  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === restaurantId
  );

  if (!restaurant) return;

  setActiveRestaurant(restaurant);
}
