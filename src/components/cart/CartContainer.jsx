import { useSelector } from "react-redux";
import { selectCartItemsIds } from "../../redux/features/cart/slice";
import Cart from "./Cart";
import { useUser } from "../userContextProvider/UserContextProvider";

export default function CartContainer() {
  const { user } = useUser();
  const itemsIds = useSelector(selectCartItemsIds);

  if (!user) return null;

  if (!itemsIds.length) return null;

  return <Cart itemsIds={itemsIds} />;
}
