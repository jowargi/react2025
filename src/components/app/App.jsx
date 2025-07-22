import RestaurantsPage from "../restaurantsPage/RestaurantsPage";
import { restaurants } from "../../constants/mock";
import Layout from "../layout/Layout";
import ThemeColorContextProvider from "../themeColorContextProvider/ThemeColorContextProvider";
import HeaderContent from "./headerContent/HeaderContent";
import FooterContent from "./footerContent/FooterContent";
import SidebarContent from "./sidebarContent/SidebarContent";
import UserContextProvider from "../userContextProvider/UserContextProvider";

export default function App() {
  return (
    <ThemeColorContextProvider initialThemeColor="light">
      <UserContextProvider initialUser={null}>
        <Layout
          header={<HeaderContent />}
          footer={<FooterContent />}
          sidebar={<SidebarContent />}
        >
          <RestaurantsPage title="Restaurants App" restaurants={restaurants} />
        </Layout>
      </UserContextProvider>
    </ThemeColorContextProvider>
  );
}
