import { createAsyncThunk } from "@reduxjs/toolkit";
import HttpError from "../../../errors/HttpError";
import { selectRestaurantsWithImageTotal } from "./slice";

export const getRestaurantsWithImage = createAsyncThunk(
  "restaurantsWithImage/getRestaurantsWithImage",

  async (_, { rejectWithValue, signal }) => {
    const restaurantsResponse = await fetch(
      "http://localhost:3001/api/restaurants/",
      { signal }
    );

    if (!restaurantsResponse.ok)
      return rejectWithValue(new HttpError(restaurantsResponse.status));

    const restaurants = await restaurantsResponse.json();

    if (!restaurants?.length)
      return rejectWithValue(new Error("Restaurants not found"));

    const imageResponses = await Promise.all(
      restaurants.map((restaurant) => fetch(restaurant.img, { signal }))
    );

    const failedImageResponse = imageResponses.find(
      (imageResponse) => !imageResponse.ok
    );

    if (failedImageResponse)
      return rejectWithValue(new HttpError(failedImageResponse.status));

    const images = await Promise.all(
      imageResponses.map((imageResponse) => imageResponse.blob())
    );

    const restaurantsWithImage = restaurants.map((restaurant, index) => ({
      ...restaurant,
      img: images[index],
    }));

    return restaurantsWithImage;
  },

  {
    condition: (_, { getState }) =>
      !selectRestaurantsWithImageTotal(getState()),
    dispatchConditionRejection: true,
  }
);
