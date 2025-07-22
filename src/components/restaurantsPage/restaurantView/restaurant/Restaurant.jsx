import Dishes from "./dishes/Dishes";
import Reviews from "./reviews/Reviews";
import ReviewForm from "./reviewForm/ReviewForm";
import styles from "./Restaurant.module.css";
import classNames from "classnames";
import { useThemeColor } from "../../../themeColorContextProvider/ThemeColorContextProvider";
import { useUser } from "../../../userContextProvider/UserContextProvider";

export default function Restaurant({ restaurant }) {
  const { name, menu, reviews } = restaurant;

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
      <div className={styles["menu-section"]}>
        <h3>Menu</h3>
        {menu?.length ? (
          <Dishes menu={menu} minPortions={0} maxPortions={5} />
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
      <div className={styles["reviews-section"]}>
        <h3>Reviews</h3>
        {reviews?.length ? (
          <Reviews reviews={reviews} />
        ) : (
          <>
            <p
              className={classNames(
                styles["empty-message"],
                styles[`empty-message--theme-color-${themeColor}`]
              )}
            >
              No reviews yet. Be the first!
            </p>
            <button
              className={classNames(
                styles["review-button"],
                styles[`review-button--theme-color-${themeColor}`]
              )}
            >
              Leave feedback
            </button>
          </>
        )}
      </div>
      {user && <ReviewForm />}
    </div>
  );
}
