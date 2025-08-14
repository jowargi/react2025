import { createAsyncThunk } from "@reduxjs/toolkit";
import HttpError from "../../../errors/HttpError";
import { selectDishesIds } from "./slice";
import { selectRestaurantById } from "../../services/restaurants/api";

export const getDishesByRestaurantId = createAsyncThunk(
  "dishes/getDishesByRestaurantId",

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
    condition: (restaurantId, { getState }) => {
      const restaurant = selectRestaurantById(getState(), restaurantId);

      const menu = restaurant?.menu;

      if (!menu?.length) return true;

      const dishesIds = selectDishesIds(getState());

      return !!menu.find((dishId) => !dishesIds.includes(dishId));
    },

    dispatchConditionRejection: true,
  }
);
