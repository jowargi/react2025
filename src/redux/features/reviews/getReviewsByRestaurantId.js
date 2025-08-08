import { createAsyncThunk } from "@reduxjs/toolkit";
import HttpError from "../../../errors/HttpError";
import { selectRestaurantById } from "../restaurants/slice";
import { selectReviewsIds } from "./slice";

export const getReviewsByRestaurantId = createAsyncThunk(
  "reviews/getReviewsByRestaurantId",

  async (restaurantId, { rejectWithValue, signal }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`,
      { signal }
    );

    if (!response.ok) return rejectWithValue(new HttpError(response.status));

    const reviews = await response.json();

    if (!reviews?.length) return rejectWithValue(new Error("No reviews found"));

    return reviews;
  },

  {
    condition: (restaurantId, { getState }) => {
      const restaurant = selectRestaurantById(getState(), restaurantId);

      const feedback = restaurant?.reviews;

      if (!feedback?.length) return true;

      const reviewsIds = selectReviewsIds(getState());

      return !!feedback.find((reviewId) => !reviewsIds.includes(reviewId));
    },
    dispatchConditionRejection: true,
  }
);
