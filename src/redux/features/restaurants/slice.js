import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./getRestaurants";

const restaurantsAdapter = createEntityAdapter({
  selectId: (restaurant) => restaurant.id,
});

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: restaurantsAdapter.getInitialState({ error: null }),

  extraReducers: (builder) => {
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.error = null;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        restaurantsAdapter.setAll(state, payload);

        state.error = null;
      })
      .addCase(getRestaurants.rejected, (state, { payload, error }) => {
        state.error = payload || error;
      });
  },

  selectors: {
    selectRestaurantsError: (state) => state.error,
  },
});

export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById,
  selectTotal: selectRestaurantsTotal,
} = restaurantsAdapter.getSelectors((state) => state[restaurantsSlice.name]);

export const { selectRestaurantsError } = restaurantsSlice.selectors;
