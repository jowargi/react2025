import { useSelector } from "react-redux";
import RestaurantsPage from "./RestaurantsPage";
import { selectRestaurantsIds } from "../../redux/features/restaurants/slice";

export default function RestaurantsPageContainer({ title }) {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return <RestaurantsPage title={title} restaurantsIds={restaurantsIds} />;
}
