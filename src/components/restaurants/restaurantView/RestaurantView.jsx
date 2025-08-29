import RestaurantTabs from "./restaurantTabs/RestaurantTabs";
import RestaurantContainer from "./restaurant/RestaurantContainer";
import { useParams } from "react-router-dom";
import RestaurantsCarouselContainer from "./restaurantsCarousel/RestaurantsCarouselContainer";

export default function RestaurantView({ restaurantsIds }) {
  const { restaurantId: activeRestaurantId } = useParams();

  if (!restaurantsIds.includes(activeRestaurantId)) return null;

  return (
    <>
      <RestaurantsCarouselContainer restaurantsIds={restaurantsIds} />
      <RestaurantTabs restaurantsIds={restaurantsIds} />
      <RestaurantContainer
        key={activeRestaurantId}
        restaurantId={activeRestaurantId}
      />
    </>
  );
}
