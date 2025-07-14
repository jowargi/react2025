import DishCounter from "./dishCounter/DishCounter";

export default function DishListItem({ dish, minPortions, maxPortions }) {
  return (
    <li>
      <h4>{dish.name}</h4>
      <DishCounter minPortions={minPortions} maxPortions={maxPortions} />
    </li>
  );
}
