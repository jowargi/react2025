import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./features/restaurants/slice";
import { dishesSlice } from "./features/dishes/slice";
import { cartSlice } from "./features/cart/slice";
import { usersSlice } from "./features/users/slice";
import { requestsSlice } from "./features/requests/slice";
import { restaurantDishesSlice } from "./features/restaurantDishes/slice";
import { restaurantReviewsSlice } from "./features/restaurantReviews/slice";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [requestsSlice.name]: requestsSlice.reducer,
    [restaurantDishesSlice.name]: restaurantDishesSlice.reducer,
    [restaurantReviewsSlice.name]: restaurantReviewsSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: false,
    }),
});
