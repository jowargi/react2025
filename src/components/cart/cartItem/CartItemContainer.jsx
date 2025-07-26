import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/features/dishes/slice";
import { selectAmountByItemId } from "../../../redux/features/cart/slice";
import CartItem from "./CartItem";

export default function CartItemContainer({ id }) {
  const dish = useSelector((state) => selectDishById(state, id));
  const amount = useSelector((state) => selectAmountByItemId(state, id));

  const { name } = dish || {};

  return name && Number.isFinite(amount) ? (
    <CartItem dishId={id} dishName={name} amount={amount} />
  ) : null;
}
