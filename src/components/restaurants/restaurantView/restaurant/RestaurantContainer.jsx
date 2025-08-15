import { useGetRestaurantsQuery } from "../../../../redux/services/restaurants/api";
import Restaurant from "./Restaurant";

export default function RestaurantContainer({ restaurantId }) {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find((restaurant) => restaurant.id === restaurantId),
    }),
  });

  const { name } = restaurant || {};

  return <Restaurant name={name} />;
}
