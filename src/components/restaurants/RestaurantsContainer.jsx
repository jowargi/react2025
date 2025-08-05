import { useSelector } from "react-redux";
import Restaurants from "./Restaurants";
import { selectRestaurantsIds } from "../../redux/features/restaurants/slice";

export default function RestaurantsContainer() {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return restaurantsIds?.length ? (
    <Restaurants restaurantsIds={restaurantsIds} />
  ) : null;
}
