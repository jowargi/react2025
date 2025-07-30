import Layout from "../layout/Layout";
import ThemeColorContextProvider from "../themeColorContextProvider/ThemeColorContextProvider";
import UserContextProvider from "../userContextProvider/UserContextProvider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import RestaurantsPage from "../../pages/restaurants/RestaurantsPage";
import RestaurantsPageRedirect from "../../redirects/RestaurantsPageRedirect";
import MenuPage from "../../pages/menu/MenuPage";
import ReviewsPage from "../../pages/reviews/ReviewsPage";
import DishPage from "../../pages/dish/DishPage";
import DishPageRedirect from "../../redirects/DishPageRedirect";
import CartPage from "../../pages/cart/CartPage";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeColorContextProvider initialThemeColor="light">
        <UserContextProvider initialUser={null}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="restaurants" element={<RestaurantsPageRedirect />}>
                  <Route path=":restaurantId" element={<RestaurantsPage />}>
                    <Route index element={<Navigate to="menu" replace />} />
                    <Route path="menu" element={<MenuPage />} />
                    <Route path="reviews" element={<ReviewsPage />} />
                    <Route
                      path="*"
                      element={<Navigate to="/restaurants" replace />}
                    />
                  </Route>
                </Route>
                <Route path="dish" element={<DishPageRedirect />}>
                  <Route path=":dishId" element={<DishPage />} />
                </Route>
                <Route path="cart" element={<CartPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContextProvider>
      </ThemeColorContextProvider>
    </Provider>
  );
}
