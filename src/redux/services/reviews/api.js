import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewsApi = createApi({
  reducerPath: "reviews",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Reviews"],

  endpoints: (builder) => ({
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: (_, __, restaurantId) => [
        { type: "Reviews", id: restaurantId },
      ],
    }),

    addReviewByRestaurantId: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        method: "POST",
        body: review,
      }),

      invalidatesTags: (_, __, { restaurantId }) => [
        { type: "Reviews", id: restaurantId },
      ],
    }),

    editReviewById: builder.mutation({
      query: ({ reviewId, review }) => ({
        url: `/review/${reviewId}`,
        method: "PATCH",
        body: review,
      }),

      invalidatesTags: (_, __, { restaurantId }) => [
        { type: "Reviews", id: restaurantId },
      ],
    }),
  }),
});

export const selectReviewById = (state, restaurantId, reviewId) => {
  return reviewsApi.endpoints.getReviewsByRestaurantId
    .select(restaurantId)(state)
    .data?.find((review) => review.id === reviewId);
};

export const {
  useGetReviewsByRestaurantIdQuery,
  useAddReviewByRestaurantIdMutation,
  useEditReviewByIdMutation,
} = reviewsApi;
