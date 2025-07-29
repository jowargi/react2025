import DishCounter from "../../dish/dishCounter/DishCounter";
import { useThemeColor } from "../../themeColorContextProvider/ThemeColorContextProvider";
import { useUser } from "../../userContextProvider/UserContextProvider";
import styles from "./CartItem.module.css";
import classNames from "classnames";

export default function CartItem({ dishId, dishName, amount }) {
  const { themeColor } = useThemeColor();
  const { user } = useUser();

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
        {user && <DishCounter dishId={dishId} />}
      </div>
    </div>
  );
}
