import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../../materials/normalized-mock";

const initialState = {
  ids: normalizedDishes.map((dish) => dish.id),
  dishes: normalizedDishes.reduce((dishes, dish) => {
    dishes[dish.id] = dish;

    return dishes;
  }, {}),
};

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,

  selectors: {
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id) => state.dishes[id],
  },
});

export const { selectDishesIds, selectDishById } = dishesSlice.selectors;
