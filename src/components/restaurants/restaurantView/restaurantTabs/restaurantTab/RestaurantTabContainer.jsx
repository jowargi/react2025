import { useGetRestaurantsQuery } from "../../../../../redux/services/restaurants/api";
import RestaurantTab from "./RestaurantTab";

export default function RestaurantTabContainer({ restaurantId }) {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find((restaurant) => restaurant.id === restaurantId),
    }),
  });

  const { name } = restaurant || {};

  return name ? <RestaurantTab id={restaurantId} name={name} /> : null;
}
