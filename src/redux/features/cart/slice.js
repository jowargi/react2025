import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},

  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },

    removeFromCart: (state, { payload }) => {
      if (!state[payload]) return state;

      state[payload] -= 1;

      if (state[payload] <= 0) delete state[payload];
    },
  },

  selectors: {
    selectAmountByItemId: (state, id) => state[id],
  },
});

const selectCartSlice = (globalState) => globalState[cartSlice.name];

export const selectCartItemsIds = createSelector([selectCartSlice], (state) =>
  Object.keys(state)
);

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectAmountByItemId } = cartSlice.selectors;
