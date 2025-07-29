import { Link } from "react-router-dom";
import { useThemeColor } from "../../../../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./DishListItem.module.css";
import classNames from "classnames";

export default function DishListItem({ id, name }) {
  const { themeColor } = useThemeColor();

  return (
    <li
      className={classNames(
        styles["dish-item"],
        styles[`dish-item--theme-color-${themeColor}`]
      )}
    >
      <h4
        className={classNames(
          styles["dish-name"],
          styles[`dish-name--theme-color-${themeColor}`]
        )}
      >
        {name}
      </h4>
      <Link
        to={`/dish/${id}`}
        className={classNames(
          styles.link,
          styles[`link--theme-color-${themeColor}`]
        )}
      >
        Order
      </Link>
    </li>
  );
}
