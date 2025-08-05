import { useThemeColor } from "../../themeColorContextProvider/ThemeColorContextProvider";
import { useUser } from "../../userContextProvider/UserContextProvider";
import styles from "./DishPageSkeleton.module.css";
import classNames from "classnames";

export default function DishPageSkeleton() {
  const { themeColor } = useThemeColor();
  const { user } = useUser();

  return (
    <section
      className={classNames(
        styles["dish-skeleton"],
        styles[`dish-skeleton--theme-color-${themeColor}`]
      )}
    >
      <div className={styles["name-skeleton"]} />
      <div className={styles["price-skeleton"]} />
      <div className={styles["ingredients-skeleton"]} />
      {user ? (
        <div className={styles["counter-skeleton"]}>
          <div className={styles["counter-button-skeleton"]} />
          <div className={styles["count-skeleton"]} />
          <div className={styles["counter-button-skeleton"]} />
        </div>
      ) : null}
      <div className={styles["link-skeleton"]} />
    </section>
  );
}
