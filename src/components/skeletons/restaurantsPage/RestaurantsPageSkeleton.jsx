import { useThemeColor } from "../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./RestaurantsPageSkeleton.module.css";
import classNames from "classnames";

export default function RestaurantsPageSkeleton() {
  const { themeColor } = useThemeColor();

  return (
    <section
      className={classNames(
        styles.container,
        styles[`container--theme-color-${themeColor}`]
      )}
    >
      <div
        className={classNames(
          styles.title,
          styles[`title--theme-color-${themeColor}`]
        )}
      />
      <div
        className={classNames(
          styles.content,
          styles[`content--theme-color-${themeColor}`]
        )}
      />
    </section>
  );
}
