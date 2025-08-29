import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurantsWithImage } from "./getRestaurantsWithImage";

const restaurantsWithImageAdapter = createEntityAdapter({
  selectId: (restaurant) => restaurant.id,
});

export const restaurantsWithImageSlice = createSlice({
  name: "restaurantsWithImage",
  initialState: restaurantsWithImageAdapter.getInitialState({ error: null }),

  extraReducers: (builder) => {
    builder
      .addCase(getRestaurantsWithImage.pending, (state) => {
        state.error = null;
      })
      .addCase(getRestaurantsWithImage.fulfilled, (state, { payload }) => {
        restaurantsWithImageAdapter.addMany(state, payload);

        state.error = null;
      })
      .addCase(
        getRestaurantsWithImage.rejected,
        (state, { payload, error }) => {
          state.error = payload || error;
        }
      );
  },

  selectors: {
    selectRestaurantsWithImageError: (state) => state.error,
  },
});

export const {
  selectIds: selectRestaurantsWithImageIds,
  selectAll: selectRestaurantsWithImage,
  selectById: selectRestaurantWithImageById,
  selectTotal: selectRestaurantsWithImageTotal,
} = restaurantsWithImageAdapter.getSelectors(
  (state) => state[restaurantsWithImageSlice.name]
);

export const { selectRestaurantsWithImageError } =
  restaurantsWithImageSlice.selectors;
