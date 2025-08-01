import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../../materials/normalized-mock";
import Reviews from "../../../components/restaurants/restaurantView/restaurant/reviews/Reviews";

const initialState = {
  ids: normalizedReviews.map((review) => review.id),
  entities: normalizedReviews.reduce((reviews, review) => {
    reviews[review.id] = review;

    return reviews;
  }, {}),
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,

  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
  },
});

export const { selectReviewsIds, selectReviewById } = reviewsSlice.selectors;
