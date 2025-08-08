import { useSelector } from "react-redux";
import {
  selectRestaurantsError,
  selectRestaurantsIds,
} from "../redux/features/restaurants/slice";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useRequest } from "../redux/hooks/useRequest";
import { getRestaurants } from "../redux/features/restaurants/getRestaurants";
import {
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../redux/constants";
import RestaurantsPageSkeleton from "../components/skeletons/restaurantsPage/RestaurantsPageSkeleton";
import ErrorAlert from "../components/errorAlert/ErrorAlert";

export default function RestaurantsPageRedirect() {
  const { restaurantId } = useParams();

  const requestStatus = useRequest(getRestaurants);

  const restaurantsIds = useSelector(selectRestaurantsIds);
  const restaurantsError = useSelector(selectRestaurantsError);

  if (requestStatus === REQUEST_STATUS_IDLE) return null;

  if (requestStatus === REQUEST_STATUS_PENDING)
    return <RestaurantsPageSkeleton />;

  if (
    requestStatus === REQUEST_STATUS_REJECTED &&
    restaurantsError?.name !== "ConditionError"
  )
    return (
      <ErrorAlert name={restaurantsError.name} message={restaurantsError.message} />
    );

  if (restaurantId) return <Outlet />;

  const firstRestaurantId = restaurantsIds?.[0];

  if (!firstRestaurantId) return <Navigate to="/" replace />;

  return <Navigate to={`/restaurants/${firstRestaurantId}`} replace />;
}
