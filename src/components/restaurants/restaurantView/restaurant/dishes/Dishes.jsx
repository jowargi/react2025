import DishListItem from "./dishListItem/DishListItem";
import styles from "./Dishes.module.css";
import DishListItemContainer from "./dishListItem/DishListItemContainer";

export default function Dishes({ menuIds }) {
  return (
    <ul className={styles["menu-list"]}>
      {menuIds.map((dishId) => (
        <DishListItemContainer key={dishId} dishId={dishId} />
      ))}
    </ul>
  );
}
