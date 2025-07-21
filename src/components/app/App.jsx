import RestaurantsPage from "../restaurantsPage/RestaurantsPage";
import { restaurants } from "../../constants/mock";
import Layout from "../layout/Layout";
import styles from "./App.module.css";
import classNames from "classnames";

export default function App({ themeColor = "light" }) {
  return (
    <Layout
      header={
        <div
          className={classNames(
            styles.header,
            styles[`header--theme-color-${themeColor}`]
          )}
        >
          HEADER
        </div>
      }
      footer={
        <div
          className={classNames(
            styles.footer,
            styles[`footer--theme-color-${themeColor}`]
          )}
        >
          FOOTER
        </div>
      }
      sidebar={
        <div
          className={classNames(
            styles.sidebar,
            styles[`sidebar--theme-color-${themeColor}`]
          )}
        >
          SIDEBAR
        </div>
      }
      themeColor={themeColor}
    >
      <RestaurantsPage
        title="Restaurants App"
        restaurants={restaurants}
        themeColor={themeColor}
      />
    </Layout>
  );
}
