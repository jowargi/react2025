import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Dishes from "../../components/restaurants/restaurantView/restaurant/dishes/Dishes";
import { useThemeColor } from "../../components/themeColorContextProvider/ThemeColorContextProvider";
import styles from "./MenuPage.module.css";
import classNames from "classnames";
import {
  selectDishesByRestaurantId,
  selectDishesErrorByRestaurantId,
} from "../../redux/features/restaurantDishes/slice";
import { useRequest } from "../../redux/hooks/useRequest";
import { getDishesByRestaurantId } from "../../redux/features/restaurantDishes/getDishesByRestaurantId";
import {
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../redux/constants";
import MenuPageSkeleton from "../../components/skeletons/menuPage/MenuPageSkeleton";
import ErrorAlert from "../../components/errorAlert/ErrorAlert";

export default function MenuPage() {
  const { themeColor } = useThemeColor();
  const { restaurantId } = useParams();

  const requestStatus = useRequest(getDishesByRestaurantId, restaurantId);

  const dishes = useSelector((state) =>
    selectDishesByRestaurantId(state, restaurantId)
  );
  const dishesError = useSelector((state) =>
    selectDishesErrorByRestaurantId(state, restaurantId)
  );

  if (requestStatus === REQUEST_STATUS_IDLE) return null;

  if (requestStatus === REQUEST_STATUS_PENDING) return <MenuPageSkeleton />;

  if (
    requestStatus === REQUEST_STATUS_REJECTED &&
    dishesError?.name !== "ConditionError"
  )
    return <ErrorAlert name={dishesError.name} message={dishesError.message} />;

  return (
    <div className={styles["menu-section"]}>
      <h3>Menu</h3>
      {dishes?.length ? (
        <Dishes dishes={dishes} />
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
