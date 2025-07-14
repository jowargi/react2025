import Counter from "../../../../counter/Counter";

export default function DishListItem({
  dish,
  minPortions = 0,
  maxPortions = 5,
}) {
  return (
    <li>
      <h4>{dish.name}</h4>
      <Counter min={minPortions} max={maxPortions} />
    </li>
  );
}
