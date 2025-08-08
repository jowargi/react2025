import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Dishes from "../../components/restaurants/restaurantView/restaurant/dishes/Dishes";
import { useThemeColor } from "../../components/themeColorContextProvider/ThemeColorContextProvider";
import styles from "./MenuPage.module.css";
import classNames from "classnames";
import {
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../redux/constants";
import MenuPageSkeleton from "../../components/skeletons/menuPage/MenuPageSkeleton";
import ErrorAlert from "../../components/errorAlert/ErrorAlert";
import { selectRestaurantById } from "../../redux/features/restaurants/slice";
import { useRequest } from "../../redux/hooks/useRequest";
import { getDishesByRestaurantId } from "../../redux/features/dishes/getDishesByRestaurantId";
import { selectRestaurantDishesError } from "../../redux/features/dishes/slice";

export default function MenuPage() {
  const { themeColor } = useThemeColor();
  const { restaurantId } = useParams();

  const requestStatus = useRequest(getDishesByRestaurantId, restaurantId);

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const restaurantDishesError = useSelector((state) =>
    selectRestaurantDishesError(state, restaurantId)
  );

  if (requestStatus === REQUEST_STATUS_IDLE) return null;

  if (requestStatus === REQUEST_STATUS_PENDING) return <MenuPageSkeleton />;

  if (
    requestStatus === REQUEST_STATUS_REJECTED &&
    restaurantDishesError?.name !== "ConditionError"
  )
    return (
      <ErrorAlert
        name={restaurantDishesError.name}
        message={restaurantDishesError.message}
      />
    );

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
