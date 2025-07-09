import React from "react";

export default function RestaurantTab({ restaurant }) {
  return <button data-restaurant-id={restaurant.id}>{restaurant.name}</button>;
}
