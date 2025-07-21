import DishCounter from "./dishCounter/DishCounter";
import styles from "./DishListItem.module.css";
import classNames from "classnames";

export default function DishListItem({
  dish,
  minPortions = 0,
  maxPortions = 5,
  themeColor = "light",
}) {
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
      <DishCounter
        minPortions={minPortions}
        maxPortions={maxPortions}
        themeColor={themeColor}
      />
    </li>
  );
}
