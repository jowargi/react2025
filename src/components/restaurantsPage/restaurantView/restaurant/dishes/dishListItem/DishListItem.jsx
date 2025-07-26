import { useThemeColor } from "../../../../../themeColorContextProvider/ThemeColorContextProvider";
import { useUser } from "../../../../../userContextProvider/UserContextProvider";
import DishCounter from "./dishCounter/DishCounter";
import styles from "./DishListItem.module.css";
import classNames from "classnames";

export default function DishListItem({ id, name }) {
  const { themeColor } = useThemeColor();
  const { user } = useUser();

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
      {user && <DishCounter dishId={id} />}
    </li>
  );
}
