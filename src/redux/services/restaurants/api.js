import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const restaurantsApi = createApi({
  reducerPath: "restaurants",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Restaurants"],

  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
      providesTags: ["Restaurants"],
    }),
  }),
});

export const selectRestaurantById = (state, restaurantId) => {
  return restaurantsApi.endpoints.getRestaurants
    .select()(state)
    .data?.find((restaurant) => restaurant.id === restaurantId);
};

export const { useGetRestaurantsQuery } = restaurantsApi;
