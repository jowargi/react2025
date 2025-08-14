import { useGetRestaurantsQuery } from "../../redux/services/restaurants/api";
import Restaurants from "./Restaurants";

export default function RestaurantsContainer() {
  const { data: restaurantsIds } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.map((restaurant) => restaurant.id),
    }),
  });

  return restaurantsIds?.length ? (
    <Restaurants restaurantsIds={restaurantsIds} />
  ) : null;
}
