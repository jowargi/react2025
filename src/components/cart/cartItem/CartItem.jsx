import DishCounter from "../../restaurantsPage/restaurantView/restaurant/dishes/dishListItem/dishCounter/DishCounter";
import { useThemeColor } from "../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./CartItem.module.css";
import classNames from "classnames";

export default function CartItem({ dishId, dishName, amount }) {
  const { themeColor } = useThemeColor();

  return (
    <div
      className={classNames(
        styles.item,
        styles[`item--theme-color-${themeColor}`]
      )}
    >
      <div
        className={classNames(
          styles.info,
          styles[`info--theme-color-${themeColor}`]
        )}
      >
        <p className={styles.name}>{dishName}</p>
        <p className={styles.amount}>Quantity: {amount}</p>
        <DishCounter dishId={dishId} />
      </div>
    </div>
  );
}
