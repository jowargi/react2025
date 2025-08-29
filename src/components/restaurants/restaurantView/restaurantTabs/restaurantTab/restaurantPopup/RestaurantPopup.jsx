import styles from "./RestaurantPopup.module.css";
import classNames from "classnames";
import { useThemeColor } from "../../../../../themeColorContextProvider/ThemeColorContextProvider";
import { usePopupPageOffset } from "../popupPageOffsetContextProvider/PopupPageOffsetContextProvider";

export default function RestaurantPopup({
  restaurantName,
  restaurantImageUrl,
}) {
  const { themeColor } = useThemeColor();
  const { popupLeft, popupTop } = usePopupPageOffset();

  return (
    <div
      className={classNames(
        styles.popup,
        styles[`popup--theme-color-${themeColor}`]
      )}
      style={{ left: `${popupLeft}px`, top: `${popupTop + 10}px` }}
    >
      <h4>{restaurantName}</h4>
      <img src={restaurantImageUrl} />
    </div>
  );
}
