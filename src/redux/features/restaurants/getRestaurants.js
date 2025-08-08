import { createAsyncThunk } from "@reduxjs/toolkit";
import HttpError from "../../../errors/HttpError";
import { selectRestaurantsTotal } from "./slice";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",

  async (_, { rejectWithValue, signal }) => {
    const response = await fetch("http://localhost:3001/api/restaurants/", {
      signal,
    });

    if (!response.ok) return rejectWithValue(new HttpError(response.status));

    const restaurants = await response.json();

    if (!restaurants?.length)
      return rejectWithValue(new Error("No restaurants found"));

    return restaurants;
  },

  {
    condition: (_, { getState }) => !selectRestaurantsTotal(getState()),
    dispatchConditionRejection: true,
  }
);
