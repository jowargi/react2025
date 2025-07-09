import React from "react";
import Restaurant from "./Restaurant";
import { restaurants } from "../materials/mock";

export default function App() {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}
