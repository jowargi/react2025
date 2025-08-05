import { createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./getReviewsByRestaurantId";

export const restaurantReviewsSlice = createSlice({
  name: "restaurantReview",

  initialState: {
    ids: [],
    entities: {},
    errors: {},
  },

  extraReducers: (builder) => {
    builder
      .addCase(getReviewsByRestaurantId.pending, (state, { meta }) => {
        state.errors[meta.arg] = null;
      })
      .addCase(
        getReviewsByRestaurantId.fulfilled,
        (state, { payload, meta }) => {
          state.ids.push(meta.arg);
          state.entities[meta.arg] = payload;

          state.errors[meta.arg] = null;
        }
      )
      .addCase(
        getReviewsByRestaurantId.rejected,
        (state, { payload, error, meta }) => {
          state.errors[meta.arg] = payload || error;
        }
      );
  },

  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectReviewsByRestaurantId: (state, id) => state.entities[id],
    selectReviewsErrorByRestaurantId: (state, id) => state.errors[id],
  },
});

export const {
  selectRestaurantsIds,
  selectReviewsByRestaurantId,
  selectReviewsErrorByRestaurantId,
} = restaurantReviewsSlice.selectors;
