import React from "react";
import RestaurantsPage from "../restaurantsPage/RestaurantsPage";
import { restaurants } from "../../constants/mock";
import Layout from "../layout/Layout";

export default function App() {
  return (
    <Layout
      header={<div>HEADER</div>}
      footer={<div>FOOTER</div>}
      sidebar={<div>SIDEBAR</div>}
    >
      <RestaurantsPage title="Restaurants App" restaurants={restaurants} />
    </Layout>
  );
}
