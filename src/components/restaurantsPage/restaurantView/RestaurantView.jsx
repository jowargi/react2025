import React, { useState } from "react";
import RestaurantTabs from "./restaurantTabs/RestaurantTabs";
import ActiveRestaurant from "./activeRestaurant/ActiveRestaurant";
import { Fragment } from "react";

export default function RestaurantView({ restaurants }) {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  return (
    <Fragment>
      <RestaurantTabs
        restaurants={restaurants}
        setActiveRestaurant={setActiveRestaurant}
      />
      <ActiveRestaurant activeRestaurant={activeRestaurant} />
    </Fragment>
  );
}
