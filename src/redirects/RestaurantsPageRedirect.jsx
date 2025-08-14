import { Navigate, Outlet, useParams } from "react-router-dom";
import RestaurantsPageSkeleton from "../components/skeletons/restaurantsPage/RestaurantsPageSkeleton";
import ErrorAlert from "../components/errorAlert/ErrorAlert";
import { useGetRestaurantsQuery } from "../redux/services/restaurants/api";

export default function RestaurantsPageRedirect() {
  const { restaurantId } = useParams();

  const {
    data: restaurantsIds,
    error,
    isLoading,
    isFetching,
    isError,
  } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.map((restaurant) => restaurant.id),
    }),
  });

  if (isLoading || isFetching) return <RestaurantsPageSkeleton />;

  if (isError) return <ErrorAlert name={error.status} message={error.error} />;

  if (restaurantId) return <Outlet />;

  const firstRestaurantId = restaurantsIds?.[0];

  if (!firstRestaurantId) return <Navigate to="/" replace />;

  return <Navigate to={`/restaurants/${firstRestaurantId}`} replace />;
}
