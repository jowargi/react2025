import RestaurantsPageContainer from "../restaurantsPage/RestaurantsPageContainer";
import CartContainer from "../cart/CartContainer";
import Layout from "../layout/Layout";
import ThemeColorContextProvider from "../themeColorContextProvider/ThemeColorContextProvider";
import HeaderContent from "./headerContent/HeaderContent";
import FooterContent from "./footerContent/FooterContent";
import SidebarContent from "./sidebarContent/SidebarContent";
import UserContextProvider from "../userContextProvider/UserContextProvider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeColorContextProvider initialThemeColor="light">
        <UserContextProvider initialUser={null}>
          <Layout
            header={<HeaderContent />}
            footer={<FooterContent />}
            sidebar={<SidebarContent />}
          >
            <RestaurantsPageContainer title="Restaurants App" />
            <CartContainer />
          </Layout>
        </UserContextProvider>
      </ThemeColorContextProvider>
    </Provider>
  );
}
