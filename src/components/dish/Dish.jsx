import DishCounter from "./dishCounter/DishCounter";
import { useThemeColor } from "../themeColorContextProvider/ThemeColorContextProvider";
import { useUser } from "../userContextProvider/UserContextProvider";
import { Link } from "react-router-dom";
import styles from "./Dish.module.css";
import classNames from "classnames";

export default function Dish({ id, name, price, ingredients }) {
  const { themeColor } = useThemeColor();
  const { user } = useUser();

  return (
    <section
      className={classNames(
        styles.dish,
        styles[`dish--theme-color-${themeColor}`]
      )}
    >
      <h2
        className={classNames(
          styles.name,
          styles[`name--theme-color-${themeColor}`]
        )}
      >
        {name}
      </h2>
      <p
        className={classNames(
          styles.price,
          styles[`price--theme-color-${themeColor}`]
        )}
      >
        Price: {price}$
      </p>
      <p
        className={classNames(
          styles.ingredients,
          styles[`ingredients--theme-color-${themeColor}`]
        )}
      >
        Ingredients:{" "}
        {ingredients?.join(", ") || "Ingredients not listed. Ask your waiter."}
      </p>
      {user && <DishCounter dishId={id} />}
      <Link
        to="/restaurants"
        className={classNames(
          styles.link,
          styles[`link--theme-color-${themeColor}`]
        )}
      >
        Back to restaurants
      </Link>
    </section>
  );
}
