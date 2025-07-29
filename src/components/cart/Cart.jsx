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
      <h2
        className={classNames(
          styles.title,
          styles[`title--theme-color-${themeColor}`]
        )}
      >
        Cart
      </h2>
      {itemsIds?.length ? (
        <ul className={styles.list}>
          {itemsIds.map((itemId) => (
            <li key={itemId}>
              <CartItemContainer id={itemId} />
            </li>
          ))}
        </ul>
      ) : (
        <p
          className={classNames(
            styles["empty-message"],
            styles[`empty-message--theme-color-${themeColor}`]
          )}
        >
          It's empty here for now!
        </p>
      )}
    </section>
  );
}
