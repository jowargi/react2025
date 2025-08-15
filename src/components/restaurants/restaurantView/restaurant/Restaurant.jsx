import ReviewFormContainer from "./reviewForm/ReviewFormContainer";
import styles from "./Restaurant.module.css";
import classNames from "classnames";
import { useThemeColor } from "../../../themeColorContextProvider/ThemeColorContextProvider";
import { useUser } from "../../../userContextProvider/UserContextProvider";
import { Outlet } from "react-router-dom";
import RestaurantNavigation from "./restaurantNavigation/RestaurantNavigation";

export default function Restaurant({ name }) {
  const { themeColor } = useThemeColor();
  const { user } = useUser();

  return (
    <div
      className={classNames(
        styles.restaurant,
        styles[`restaurant--theme-color-${themeColor}`]
      )}
    >
      <h2
        className={classNames(
          styles.name,
          styles[`name--theme-color-${themeColor}`]
        )}
      >
        {name}
      </h2>
      <RestaurantNavigation />
      <Outlet />
      {user && <ReviewFormContainer />}
    </div>
  );
}
