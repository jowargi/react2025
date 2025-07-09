import React from "react";
import Restaurant from "./restaurant/Restaurant";

export default function ActiveRestaurant({ activeRestaurant }) {
  return <Restaurant restaurant={activeRestaurant} />;
}
