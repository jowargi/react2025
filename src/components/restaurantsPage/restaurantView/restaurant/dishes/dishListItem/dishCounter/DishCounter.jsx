import { useUser } from "../../../../../../userContextProvider/UserContextProvider";
import Counter from "../../../../../counter/Counter";
import { useCount } from "./useCounter";

export default function DishCounter({ minPortions, maxPortions }) {
  const { user } = useUser();

  const { count, decrement, increment } = useCount({
    min: minPortions,
    max: maxPortions,
    isEnabled: !!user,
  });

  if (!user) return null;

  return <Counter count={count} decrement={decrement} increment={increment} />;
}
