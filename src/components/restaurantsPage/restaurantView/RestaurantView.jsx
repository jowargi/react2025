import React, { useState } from "react";
import RestaurantTabs from "./restaurantTabs/RestaurantTabs";
import Restaurant from "./restaurant/Restaurant";

export default function RestaurantView({ restaurants, themeColor = "light" }) {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  return (
    <>
      <RestaurantTabs
        restaurants={restaurants}
        activeRestaurant={activeRestaurant}
        setActiveRestaurant={setActiveRestaurant}
        themeColor={themeColor}
      />
      <Restaurant
        key={activeRestaurant.id}
        restaurant={activeRestaurant}
        themeColor={themeColor}
      />
    </>
  );
}
