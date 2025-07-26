import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../../materials/normalized-mock";
import Reviews from "../../../components/restaurantsPage/restaurantView/restaurant/reviews/Reviews";

const initialState = {
  ids: normalizedReviews.map((review) => review.id),
  reviews: normalizedReviews.reduce((reviews, review) => {
    reviews[review.id] = review;

    return reviews;
  }, {}),
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,

  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.reviews[id],
  },
});

export const { selectReviewsIds, selectReviewById } = reviewsSlice.selectors;
