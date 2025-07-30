import { Navigate } from "react-router-dom";
import CartContainer from "../../components/cart/CartContainer";
import { useUser } from "../../components/userContextProvider/UserContextProvider";

export default function CartPage() {
  const { user } = useUser();

  if (user) return <CartContainer />;

  return <Navigate to="/" replace />;
}
