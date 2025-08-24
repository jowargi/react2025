import { useSelector } from "react-redux";
import { selectRestaurantsWithImage } from "../../../../redux/features/restaurantsWithImage/slice";
import RestaurantsCarousel from "./RestaurantsCarousel";

export default function RestaurantsCarouselContainer({ restaurantsIds }) {
  let restaurantsWithImage = useSelector(selectRestaurantsWithImage);

  restaurantsWithImage = restaurantsWithImage.filter((restaurant) =>
    restaurantsIds.includes(restaurant.id)
  );

  if (!restaurantsWithImage.length) return null;

  return <RestaurantsCarousel restaurantsWithImage={restaurantsWithImage} />;
}
