import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../../../redux/features/restaurants/slice";
import RestaurantTab from "./RestaurantTab";

export default function RestaurantTabContainer({ restaurantId, isDisabled }) {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const { name } = restaurant || {};

  return name ? (
    <RestaurantTab id={restaurantId} name={name} isDisabled={isDisabled} />
  ) : null;
}
