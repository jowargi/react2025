import styles from "./RestaurantTab.module.css";
import classNames from "classnames";

export default function RestaurantTab({
  restaurant,
  isDisabled,
  themeColor = "light",
}) {
  return (
    <button
      data-restaurant-id={restaurant.id}
      disabled={isDisabled}
      className={classNames(
        styles.tab,
        styles[`tab--theme-color-${themeColor}`],
        {
          [styles["tab--disabled"]]: isDisabled,
          [styles[`tab--disabled--theme-color-${themeColor}`]]: isDisabled,
        }
      )}
    >
      {restaurant.name}
    </button>
  );
}
