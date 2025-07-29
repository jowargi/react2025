import { useUser } from "../../userContextProvider/UserContextProvider";
import Counter from "../../restaurants/counter/Counter";
import { useCount } from "./useCount";

export default function DishCounter({ dishId }) {
  const { user } = useUser();

  const { amount, decrement, increment } = useCount({
    dishId,
    isEnabled: !!user,
  });

  if (!user) return null;

  return <Counter count={amount} decrement={decrement} increment={increment} />;
}
