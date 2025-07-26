import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./features/restaurants/slice";
import { dishesSlice } from "./features/dishes/slice";
import { reviewsSlice } from "./features/reviews/slice";
import { cartSlice } from "./features/cart/slice";
import { usersSlice } from "./features/users/slice";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
  },
});
