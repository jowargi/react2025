import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../../redux/features/restaurants/slice";
import Restaurant from "./Restaurant";

export default function RestaurantContainer({ restaurantId }) {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const { name, menu, reviews } = restaurant || {};

  return (
    <Restaurant
      id={restaurantId}
      name={name}
      menuIds={menu}
      reviewsIds={reviews}
    />
  );
}
