import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishById } from "./getDishById";
import { getDishesByRestaurantId } from "./getDishesByRestaurantId";

const dishesAdapter = createEntityAdapter({
  selectId: (dish) => dish.id,
});

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: dishesAdapter.getInitialState({
    dishErrors: {},
    restaurantDishesErrors: {},
  }),

  extraReducers: (builder) => {
    builder
      .addCase(getDishById.pending, (state, { meta }) => {
        state.dishErrors[meta.arg] = null;
      })
      .addCase(getDishById.fulfilled, (state, { payload, meta }) => {
        dishesAdapter.addOne(state, payload);

        state.dishErrors[meta.arg] = null;
      })
      .addCase(getDishById.rejected, (state, { payload, error, meta }) => {
        state.dishErrors[meta.arg] = payload || error;
      })
      .addCase(getDishesByRestaurantId.pending, (state, { meta }) => {
        state.restaurantDishesErrors[meta.arg] = null;
      })
      .addCase(
        getDishesByRestaurantId.fulfilled,
        (state, { payload, meta }) => {
          dishesAdapter.addMany(state, payload);

          state.restaurantDishesErrors[meta.arg] = null;
        }
      )
      .addCase(
        getDishesByRestaurantId.rejected,
        (state, { payload, error, meta }) => {
          state.restaurantDishesErrors[meta.arg] = payload || error;
        }
      );
  },

  selectors: {
    selectDishErrorById: (state, id) => state.dishErrors[id],
    selectRestaurantDishesError: (state, id) =>
      state.restaurantDishesErrors[id],
  },
});

export const { selectIds: selectDishesIds, selectById: selectDishById } =
  dishesAdapter.getSelectors((state) => state[dishesSlice.name]);

export const { selectDishErrorById, selectRestaurantDishesError } =
  dishesSlice.selectors;
