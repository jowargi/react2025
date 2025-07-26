import { useThemeColor } from "../../../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./RestaurantTab.module.css";
import classNames from "classnames";

export default function RestaurantTab({ id, name, isDisabled }) {
  const { themeColor } = useThemeColor();

  return (
    <button
      data-restaurant-id={id}
      disabled={isDisabled}
      className={classNames(
        styles.tab,
        styles[`tab--theme-color-${themeColor}`],
        {
          [styles["tab--disabled"]]: isDisabled,
          [styles[`tab--disabled--theme-color-${themeColor}`]]: isDisabled,
        }
      )}
    >
      {name}
    </button>
  );
}
