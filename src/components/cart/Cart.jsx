import CartItemContainer from "./cartItem/CartItemContainer";
import styles from "./Cart.module.css";
import classNames from "classnames";
import { useThemeColor } from "../themeColorContextProvider/ThemeColorContextProvider";

export default function Cart({ itemsIds }) {
  const { themeColor } = useThemeColor();

  return (
    <section
      className={classNames(
        styles.cart,
        styles[`cart--theme-color-${themeColor}`]
      )}
    >
      <h3
        className={classNames(
          styles.title,
          styles[`title--theme-color-${themeColor}`]
        )}
      >
        Cart
      </h3>
      <ul className={styles.list}>
        {itemsIds.map((itemId) => (
          <li key={itemId}>
            <CartItemContainer id={itemId} />
          </li>
        ))}
      </ul>
    </section>
  );
}
