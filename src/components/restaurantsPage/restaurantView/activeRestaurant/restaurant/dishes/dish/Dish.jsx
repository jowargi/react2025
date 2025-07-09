import React from "react";
import DishCounter from "./dishCounter/DishCounter";

export default function Dish({ dish, minPortions, maxPortions }) {
  return (
    <li>
      <h4>{dish.name}</h4>
      <DishCounter
        minCount={minPortions ?? maxPortions}
        maxCount={maxPortions ?? minPortions}
      />
    </li>
  );
}
