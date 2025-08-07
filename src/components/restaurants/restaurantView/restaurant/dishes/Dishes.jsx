import styles from "./Dishes.module.css";
import DishListItemContainer from "./dishListItem/DishListItemContainer";

export default function Dishes({ dishesIds }) {
  return (
    <ul className={styles["menu-list"]}>
      {dishesIds.map((dishId) => (
        <DishListItemContainer key={dishId} dishId={dishId} />
      ))}
    </ul>
  );
}
