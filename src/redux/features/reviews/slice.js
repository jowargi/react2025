import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./getReviewsByRestaurantId";

const reviewsAdapter = createEntityAdapter({
  selectId: (review) => review.id,
});

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: reviewsAdapter.getInitialState({ restaurantReviewsErrors: {} }),

  extraReducers: (builder) => {
    builder
      .addCase(getReviewsByRestaurantId.pending, (state, { meta }) => {
        state.restaurantReviewsErrors[meta.arg] = null;
      })
      .addCase(
        getReviewsByRestaurantId.fulfilled,
        (state, { payload, meta }) => {
          reviewsAdapter.addMany(state, payload);

          state.restaurantReviewsErrors[meta.arg] = null;
        }
      )
      .addCase(
        getReviewsByRestaurantId.rejected,
        (state, { payload, error, meta }) => {
          state.restaurantReviewsErrors[meta.arg] = payload || error;
        }
      );
  },

  selectors: {
    selectRestaurantReviewsError: (state, id) =>
      state.restaurantReviewsErrors[id],
  },
});

export const { selectIds: selectReviewsIds, selectById: selectReviewById } =
  reviewsAdapter.getSelectors((state) => state[reviewsSlice.name]);

export const { selectRestaurantReviewsError } = reviewsSlice.selectors;
