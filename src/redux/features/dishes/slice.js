import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishById } from "./getDishById";

const dishesAdapter = createEntityAdapter({
  selectId: (dish) => dish.id,
});

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: dishesAdapter.getInitialState({ errors: {} }),

  extraReducers: (builder) => {
    builder
      .addCase(getDishById.pending, (state, { meta }) => {
        state.errors[meta.arg] = null;
      })
      .addCase(getDishById.fulfilled, (state, { payload, meta }) => {
        dishesAdapter.addOne(state, payload);

        state.errors[meta.arg] = null;
      })
      .addCase(getDishById.rejected, (state, { payload, error, meta }) => {
        state.errors[meta.arg] = payload || error;
      });
  },

  selectors: {
    selectDishErrorById: (state, id) => state.errors[id],
  },
});

export const { selectIds: selectDishesIds, selectById: selectDishById } =
  dishesAdapter.getSelectors((state) => state[dishesSlice.name]);

export const { selectDishErrorById } = dishesSlice.selectors;
