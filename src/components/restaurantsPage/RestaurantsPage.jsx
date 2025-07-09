import React from "react";
import Restaurant from "./restaurant/Restaurant";
import { Fragment } from "react";

export default function RestaurantsPage({ title, restaurants }) {
  return (
    <section>
      <h1>{title}</h1>
      {restaurants?.length ? (
        <Fragment>
          {restaurants.map((restaurant) => (
            <Restaurant key={restaurant.id} restaurant={restaurant} />
          ))}
        </Fragment>
      ) : (
        <p>No restaurants</p>
      )}
    </section>
  );
}
