import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectRestaurantById } from "../../redux/features/restaurants/slice";
import Dishes from "../../components/restaurants/restaurantView/restaurant/dishes/Dishes";
import { useThemeColor } from "../../components/themeColorContextProvider/ThemeColorContextProvider";
import styles from "./MenuPage.module.css";
import classNames from "classnames";

export default function MenuPage() {
  const { themeColor } = useThemeColor();
  const { restaurantId } = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const { menu } = restaurant || {};

  return (
    <div className={styles["menu-section"]}>
      <h3>Menu</h3>
      {menu?.length ? (
        <Dishes menuIds={menu} />
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
