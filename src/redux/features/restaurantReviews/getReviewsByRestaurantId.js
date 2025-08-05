import { createAsyncThunk } from "@reduxjs/toolkit";
import HttpError from "../../../errors/HttpError";
import { selectReviewsByRestaurantId } from "./slice";

export const getReviewsByRestaurantId = createAsyncThunk(
  "restaurantReview/getReviewsByRestaurantId",

  async (restaurantId, { rejectWithValue, signal }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`,
      {
        signal,
      }
    );

    if (!response.ok) return rejectWithValue(new HttpError(response.status));

    const reviews = await response.json();

    if (!reviews?.length) return rejectWithValue(new Error("No reviews found"));

    return reviews;
  },

  {
    condition: (restaurantId, { getState }) =>
      !selectReviewsByRestaurantId(getState(), restaurantId)?.length,
    dispatchConditionRejection: true,
  }
);
