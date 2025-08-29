import { createAsyncThunk } from "@reduxjs/toolkit";
import HttpError from "../../../errors/HttpError";
import { selectImageById } from "./slice";

export const getImageByRestaurantId = createAsyncThunk(
  "images/getImageByRestaurantId",

  async (restaurantId, { rejectWithValue, signal }) => {
    const restaurantResponse = await fetch(
      `http://localhost:3001/api/restaurant/${restaurantId}`,
      { signal }
    );

    if (!restaurantResponse.ok)
      return rejectWithValue(new HttpError(restaurantResponse.status));

    const restaurant = await restaurantResponse.json();

    if (!restaurant) return rejectWithValue(new Error("Restaurant not found"));

    const imageUrl = restaurant.img;

    if (!imageUrl)
      return rejectWithValue(new Error("Restaurant image URL not found"));

    const imageResponse = await fetch(imageUrl, { signal });

    if (!imageResponse.ok)
      return rejectWithValue(new HttpError(imageResponse.status));

    const image = await imageResponse.blob();

    return image;
  },

  {
    condition: (restaurantId, { getState }) =>
      !selectImageById(getState(), restaurantId),
    dispatchConditionRejection: true,
  }
);
