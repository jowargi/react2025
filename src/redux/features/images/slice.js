import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getImageByRestaurantId } from "./getImageByRestaurantId";

export const imagesSlice = createSlice({
  name: "images",

  initialState: {
    ids: [],
    entities: {},
    errors: {},
  },

  extraReducers: (builder) => {
    builder
      .addCase(getImageByRestaurantId.pending, (state, { meta }) => {
        state.errors[meta.arg] = null;
      })
      .addCase(getImageByRestaurantId.fulfilled, (state, { payload, meta }) => {
        state.ids.push(meta.arg);
        state.entities[meta.arg] = payload;
        state.errors[meta.arg] = null;
      })
      .addCase(
        getImageByRestaurantId.rejected,
        (state, { payload, error, meta }) => {
          state.errors[meta.arg] = payload || error;
        }
      );
  },

  selectors: {
    selectImageById: (state, id) => state.entities[id],
    selectImageErrorById: (state, id) => state.errors[id],
  },
});

export const selectImages = createSelector(
  [(globalState) => globalState[imagesSlice.name]],
  (state) => Object.values(state.entities)
);

export const { selectImageById, selectImageErrorById } = imagesSlice.selectors;
