import { useParams } from "react-router-dom";
import Dishes from "../../components/restaurants/restaurantView/restaurant/dishes/Dishes";
import { useThemeColor } from "../../components/themeColorContextProvider/ThemeColorContextProvider";
import styles from "./MenuPage.module.css";
import classNames from "classnames";
import MenuPageSkeleton from "../../components/skeletons/menuPage/MenuPageSkeleton";
import ErrorAlert from "../../components/errorAlert/ErrorAlert";
import { useGetRestaurantsQuery } from "../../redux/services/restaurants/api";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/dishes/api";

export default function MenuPage() {
  const { themeColor } = useThemeColor();
  const { restaurantId } = useParams();

  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find((restaurant) => restaurant.id === restaurantId),
    }),
  });

  const { error, isLoading, isFetching, isError } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading || isFetching) return <MenuPageSkeleton />;

  if (isError) return <ErrorAlert name={error.status} message={error.error} />;

  const { menu } = restaurant || {};

  return (
    <div className={styles["menu-section"]}>
      <h3>Menu</h3>
      {menu?.length ? (
        <Dishes dishesIds={menu} />
      ) : (
        <p
          className={classNames(
            styles["empty-message"],
            styles[`empty-message--theme-color-${themeColor}`]
          )}
        >
          The menu is temporarily unavailable. Try again later!
        </p>
      )}
    </div>
  );
}
