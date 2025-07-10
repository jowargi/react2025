import DishListItem from "./dishListItem/DishListItem";

export default function Dishes({ menu, minPortions, maxPortions }) {
  return (
    <ul>
      {menu.map((dish) => (
        <DishListItem
          key={dish.id}
          dish={dish}
          minPortions={minPortions}
          maxPortions={maxPortions}
        />
      ))}
    </ul>
  );
}
