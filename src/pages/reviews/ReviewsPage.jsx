import { useParams } from "react-router-dom";
import { useThemeColor } from "../../components/themeColorContextProvider/ThemeColorContextProvider";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/features/restaurants/slice";
import Reviews from "../../components/restaurants/restaurantView/restaurant/reviews/Reviews";
import styles from "./ReviewsPage.module.css";
import classNames from "classnames";

export default function ReviewsPage() {
  const { themeColor } = useThemeColor();
  const { restaurantId } = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const { reviews } = restaurant || {};

  return (
    <div className={styles["reviews-section"]}>
      <h3>Reviews</h3>
      {reviews?.length ? (
        <Reviews reviewsIds={reviews} />
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
  );
}
