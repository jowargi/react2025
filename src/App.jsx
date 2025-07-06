import React from "react";
import Restaurant from "./Restaurant";
import { restaurants } from "../materials/mock";

export default function App() {
  return (
    <div>
      {restaurants.map((item, index) => (
        <Restaurant key={index} template={item} />
      ))}
    </div>
  );
}
