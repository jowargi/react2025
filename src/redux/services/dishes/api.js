import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const dishesApi = createApi({
  reducerPath: "dishes",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Dish", "RestaurantDishes"],

  endpoints: (builder) => ({
    getDishById: builder.query({
      query: (dishId) => `/dish/${dishId}`,
      providesTags: (_, __, dishId) => [{ type: "Dish", id: dishId }],
    }),

    getDishesByRestaurantId: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
      providesTags: (_, __, restaurantId) => [
        { type: "RestaurantDishes", id: restaurantId },
      ],
    }),
  }),
});

export const selectDishById = (state, dishId) => {
  return dishesApi.endpoints.getDishById.select(dishId)(state).data;
};

export const selectRestaurantDishById = (state, restaurantId, dishId) => {
  return dishesApi.endpoints.getDishesByRestaurantId
    .select(restaurantId)(state)
    .data?.find((dish) => dish.id === dishId);
};

export const { useGetDishByIdQuery, useGetDishesByRestaurantIdQuery } =
  dishesApi;
