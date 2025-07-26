import RestaurantView from "./restaurantView/RestaurantView";
import styles from "./RestaurantsPage.module.css";
import classNames from "classnames";
import { useThemeColor } from "../themeColorContextProvider/ThemeColorContextProvider";

export default function RestaurantsPage({ title, restaurantsIds }) {
  const { themeColor } = useThemeColor();

  return (
    <section
      className={classNames(
        styles.container,
        styles[`container--theme-color-${themeColor}`]
      )}
    >
      <h1
        className={classNames(
          styles.title,
          styles[`title--theme-color-${themeColor}`]
        )}
      >
        {title}
      </h1>
      <div
        className={classNames(
          styles.content,
          styles[`content--theme-color-${themeColor}`]
        )}
      >
        {restaurantsIds?.length ? (
          <RestaurantView restaurantsIds={restaurantsIds} />
        ) : (
          <p
            className={classNames(
              styles["empty-message"],
              styles[`empty-message--theme-color-${themeColor}`]
            )}
          >
            No restaurants
          </p>
        )}
      </div>
    </section>
  );
}
