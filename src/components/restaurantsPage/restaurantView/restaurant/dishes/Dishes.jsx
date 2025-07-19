import DishListItem from "./dishListItem/DishListItem";
import styles from "./Dishes.module.css";

export default function Dishes({
  menu,
  minPortions,
  maxPortions,
  themeColor = "light",
}) {
  return (
    <ul className={styles["menu-list"]}>
      {menu.map((dish) => (
        <DishListItem
          key={dish.id}
          dish={dish}
          minPortions={minPortions}
          maxPortions={maxPortions}
          themeColor={themeColor}
        />
      ))}
    </ul>
  );
}
