import Counter from "../../../../../counter/Counter";
import { useCount } from "./useCounter";

export default function DishCounter({ minPortions, maxPortions }) {
  const { count, decrement, increment } = useCount({
    min: minPortions,
    max: maxPortions,
  });

  return <Counter count={count} decrement={decrement} increment={increment} />;
}
