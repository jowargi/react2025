import styles from "./Dishes.module.css";
import DishListItem from "./dishListItem/DishListItem";

export default function Dishes({ dishes }) {
  return (
    <ul className={styles["menu-list"]}>
      {dishes.map((dish) => {
        const { id, name } = dish || {};

        return id && name ? (
          <DishListItem key={id} id={id} name={name} />
        ) : null;
      })}
    </ul>
  );
}
