import { usePopupPageOffset } from "../../restaurants/restaurantView/restaurantTabs/restaurantTab/popupPageOffsetContextProvider/PopupPageOffsetContextProvider";
import { useThemeColor } from "../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./RestaurantPopupSkeleton.module.css";
import classNames from "classnames";

export default function RestaurantPopupSkeleton() {
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
      <div className={styles.spinner} />
    </div>
  );
}
