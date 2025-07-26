import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../materials/normalized-mock";

const initialState = {
  ids: normalizedRestaurants.map((restaurant) => restaurant.id),

  restaurants: normalizedRestaurants.reduce((restaurants, restaurant) => {
    restaurants[restaurant.id] = restaurant;

    return restaurants;
  }, {}),
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,

  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.restaurants[id],
  },
});

export const { selectRestaurantsIds, selectRestaurantById } =
  restaurantsSlice.selectors;
