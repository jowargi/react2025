import { useSelector } from "react-redux";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { selectDishesIds } from "../redux/features/dishes/slice";

export default function DishPageRedirect() {
  const { dishId } = useParams();
  const dishesIds = useSelector(selectDishesIds);

  if (dishId) return <Outlet />;

  const firstDishId = dishesIds?.[0];

  if (!firstDishId) return <Navigate to="/" replace />;

  return <Navigate to={`/dish/${firstDishId}`} replace />;
}
