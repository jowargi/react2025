import RestaurantTabs from "./restaurantTabs/RestaurantTabs";
import RestaurantContainer from "./restaurant/RestaurantContainer";
import { useParams } from "react-router-dom";

export default function RestaurantView({ restaurantsIds }) {
  const { restaurantId: activeRestaurantId } = useParams();

  if (!restaurantsIds.includes(activeRestaurantId)) return null;

  return (
    <>
      <RestaurantTabs restaurantsIds={restaurantsIds} />
      <RestaurantContainer
        key={activeRestaurantId}
        restaurantId={activeRestaurantId}
      />
    </>
  );
}
