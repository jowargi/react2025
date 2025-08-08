import { createAsyncThunk } from "@reduxjs/toolkit";
import HttpError from "../../../errors/HttpError";
import { selectDishById } from "./slice";

export const getDishById = createAsyncThunk(
  "dishes/getDishById",

  async (dishId, { rejectWithValue, signal }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`, {
      signal,
    });

    if (!response.ok) return rejectWithValue(new HttpError(response.status));

    const dish = await response.json();

    if (!dish) return rejectWithValue(new Error("Dish not found"));

    return dish;
  },

  {
    condition: (dishId, { getState }) => !selectDishById(getState(), dishId),
    dispatchConditionRejection: true,
  }
);
