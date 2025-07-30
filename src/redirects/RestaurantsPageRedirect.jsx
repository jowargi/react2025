import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/features/restaurants/slice";
import { Navigate, Outlet, useParams } from "react-router-dom";

export default function RestaurantsPageRedirect() {
  const { restaurantId } = useParams();
  const restaurantsIds = useSelector(selectRestaurantsIds);

  if (restaurantId) return <Outlet />;

  const firstRestaurantId = restaurantsIds?.[0];

  if (!firstRestaurantId) return <Navigate to="/" replace />;

  return <Navigate to={`/restaurants/${firstRestaurantId}`} replace />;
}
