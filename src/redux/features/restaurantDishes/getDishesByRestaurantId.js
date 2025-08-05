import { createAsyncThunk } from "@reduxjs/toolkit";
import HttpError from "../../../errors/HttpError";
import { selectDishesByRestaurantId } from "./slice";

export const getDishesByRestaurantId = createAsyncThunk(
  "restaurantDishes/getDishesByRestaurantId",

  async (restaurantId, { rejectWithValue, signal }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`,
      { signal }
    );

    if (!response.ok) return rejectWithValue(new HttpError(response.status));

    const dishes = await response.json();

    if (!dishes?.length) return rejectWithValue(new Error("No dishes found"));

    return dishes;
  },

  {
    condition: (restaurantId, { getState }) =>
      !selectDishesByRestaurantId(getState(), restaurantId)?.length,
    dispatchConditionRejection: true,
  }
);
