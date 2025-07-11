import Counter from "../../../../../counter/Counter";

export default function DishCounter({ minPortions = 0, maxPortions = 5 }) {
  return <Counter min={minPortions} max={maxPortions} />;
}
