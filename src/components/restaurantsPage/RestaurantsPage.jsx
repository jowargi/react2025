import RestaurantView from "./restaurantView/RestaurantView";
import styles from "./RestaurantsPage.module.css";
import classNames from "classnames";

export default function RestaurantsPage({
  title,
  restaurants,
  themeColor = "light",
}) {
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
        {restaurants?.length ? (
          <RestaurantView restaurants={restaurants} themeColor={themeColor} />
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
