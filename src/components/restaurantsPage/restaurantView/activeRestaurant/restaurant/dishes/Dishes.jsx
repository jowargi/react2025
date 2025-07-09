import React from "react";
import Dish from "./dish/Dish";

export default function Dishes({ menu, minPortions, maxPortions }) {
  return (
    <ul>
      {menu.map((dish) => (
        <Dish
          key={dish.id}
          dish={dish}
          minPortions={minPortions}
          maxPortions={maxPortions}
        />
      ))}
    </ul>
  );
}
