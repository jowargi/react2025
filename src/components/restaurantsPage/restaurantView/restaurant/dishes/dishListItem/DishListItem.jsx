import { useThemeColor } from "../../../../../themeColorContextProvider/ThemeColorContextProvider";
import { useUser } from "../../../../../userContextProvider/UserContextProvider";
import DishCounter from "./dishCounter/DishCounter";
import styles from "./DishListItem.module.css";
import classNames from "classnames";

export default function DishListItem({
  dish,
  minPortions = 0,
  maxPortions = 5,
}) {
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
        {dish.name}
      </h4>
      {user && (
        <DishCounter minPortions={minPortions} maxPortions={maxPortions} />
      )}
    </li>
  );
}
