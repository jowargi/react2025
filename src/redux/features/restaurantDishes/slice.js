import { createSlice } from "@reduxjs/toolkit";
import { getDishesByRestaurantId } from "./getDishesByRestaurantId";

export const restaurantDishesSlice = createSlice({
  name: "restaurantDishes",

  initialState: {
    ids: [],
    entities: {},
    errors: {},
  },

  extraReducers: (builder) => {
    builder
      .addCase(getDishesByRestaurantId.pending, (state, { meta }) => {
        state.errors[meta.arg] = null;
      })
      .addCase(
        getDishesByRestaurantId.fulfilled,
        (state, { payload, meta }) => {
          state.ids.push(meta.arg);
          state.entities[meta.arg] = payload;

          state.errors[meta.arg] = null;
        }
      )
      .addCase(
        getDishesByRestaurantId.rejected,
        (state, { payload, error, meta }) => {
          state.errors[meta.arg] = payload || error;
        }
      );
  },

  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectDishesByRestaurantId: (state, id) => state.entities[id],
    selectDishesErrorByRestaurantId: (state, id) => state.errors[id],
  },
});

export const {
  selectRestaurantsIds,
  selectDishesByRestaurantId,
  selectDishesErrorByRestaurantId,
} = restaurantDishesSlice.selectors;
