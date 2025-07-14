import React, { useState } from "react";
import RestaurantTabs from "./restaurantTabs/RestaurantTabs";
import Restaurant from "./restaurant/Restaurant";
import { Fragment } from "react";

export default function RestaurantView({ restaurants }) {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  return (
    <>
      <RestaurantTabs
        restaurants={restaurants}
        activeRestaurant={activeRestaurant}
        setActiveRestaurant={setActiveRestaurant}
      />
      <Restaurant restaurant={activeRestaurant} />
    </>
  );
}
