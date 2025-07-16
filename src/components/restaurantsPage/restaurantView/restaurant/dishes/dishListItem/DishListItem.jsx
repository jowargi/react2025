import DishCounter from "./dishCounter/DishCounter";

export default function DishListItem({
  dish,
  minPortions = 0,
  maxPortions = 5,
}) {
  return (
    <li>
      <h4>{dish.name}</h4>
      <DishCounter minPortions={minPortions} maxPortions={maxPortions} />
    </li>
  );
}
