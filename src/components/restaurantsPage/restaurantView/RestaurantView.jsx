import { useState } from "react";
import RestaurantTabs from "./restaurantTabs/RestaurantTabs";
import RestaurantContainer from "./restaurant/RestaurantContainer";

export default function RestaurantView({ restaurantsIds }) {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds[0]
  );

  return (
    <>
      <RestaurantTabs
        restaurantsIds={restaurantsIds}
        activeRestaurantId={activeRestaurantId}
        setActiveRestaurantId={setActiveRestaurantId}
      />
      <RestaurantContainer
        key={activeRestaurantId}
        restaurantId={activeRestaurantId}
      />
    </>
  );
}
