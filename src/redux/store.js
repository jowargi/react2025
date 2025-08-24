import { configureStore } from "@reduxjs/toolkit";
import { dishesSlice } from "./features/dishes/slice";
import { cartSlice } from "./features/cart/slice";
import { requestsSlice } from "./features/requests/slice";
import { reviewsApi } from "./services/reviews/api";
import { usersApi } from "./services/users/api";
import { restaurantsApi } from "./services/restaurants/api";
import { imagesSlice } from "./features/images/slice";
import { restaurantsWithImageSlice } from "./features/restaurantsWithImage/slice";

export const store = configureStore({
  reducer: {
    [dishesSlice.name]: dishesSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [imagesSlice.name]: imagesSlice.reducer,
    [restaurantsWithImageSlice.name]: restaurantsWithImageSlice.reducer,
    [requestsSlice.name]: requestsSlice.reducer,
    [restaurantsApi.reducerPath]: restaurantsApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(
      restaurantsApi.middleware,
      reviewsApi.middleware,
      usersApi.middleware
    ),
});
