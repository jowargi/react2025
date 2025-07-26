import { useCallback } from "react";
import { useThemeColor } from "../../../themeColorContextProvider/ThemeColorContextProvider";
import RestaurantTabContainer from "./restaurantTab/RestaurantTabContainer";
import styles from "./RestaurantTabs.module.css";
import classNames from "classnames";

export default function RestaurantTabs({
  restaurantsIds,
  activeRestaurantId,
  setActiveRestaurantId,
}) {
  const { themeColor } = useThemeColor();

  const onClick = useCallback(
    (event) => {
      const restaurantId = event.target.dataset.restaurantId;

      if (!restaurantId) return;

      if (!restaurantsIds.includes(restaurantId)) return;

      setActiveRestaurantId(restaurantId);
    },
    [restaurantsIds, setActiveRestaurantId]
  );

  return (
    <div
      onClick={onClick}
      className={classNames(
        styles["tabs-container"],
        styles[`tabs-container--theme-color-${themeColor}`]
      )}
    >
      {restaurantsIds.map((restaurantId) => (
        <RestaurantTabContainer
          key={restaurantId}
          restaurantId={restaurantId}
          isDisabled={restaurantId === activeRestaurantId}
        />
      ))}
    </div>
  );
}
