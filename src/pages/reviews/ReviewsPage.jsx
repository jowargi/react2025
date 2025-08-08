import { useParams } from "react-router-dom";
import { useThemeColor } from "../../components/themeColorContextProvider/ThemeColorContextProvider";
import { useSelector } from "react-redux";
import Reviews from "../../components/restaurants/restaurantView/restaurant/reviews/Reviews";
import styles from "./ReviewsPage.module.css";
import classNames from "classnames";
import {
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../redux/constants";
import ReviewsPageSkeleton from "../../components/skeletons/reviewsPage/ReviewsPageSkeleton";
import ErrorAlert from "../../components/errorAlert/ErrorAlert";
import { useRequest } from "../../redux/hooks/useRequest";
import { getReviewsByRestaurantId } from "../../redux/features/reviews/getReviewsByRestaurantId";
import { selectRestaurantById } from "../../redux/features/restaurants/slice";
import { selectRestaurantReviewsError } from "../../redux/features/reviews/slice";

export default function ReviewsPage() {
  const { themeColor } = useThemeColor();
  const { restaurantId } = useParams();

  const requestStatus = useRequest(getReviewsByRestaurantId, restaurantId);

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const restaurantReviewsError = useSelector((state) =>
    selectRestaurantReviewsError(state, restaurantId)
  );

  if (requestStatus === REQUEST_STATUS_IDLE) return null;

  if (requestStatus === REQUEST_STATUS_PENDING) return <ReviewsPageSkeleton />;

  if (
    requestStatus === REQUEST_STATUS_REJECTED &&
    restaurantReviewsError?.name !== "ConditionError"
  )
    return (
      <ErrorAlert
        name={restaurantReviewsError.name}
        message={restaurantReviewsError.message}
      />
    );

  const { reviews: reviewsIds } = restaurant || {};

  return (
    <div className={styles["reviews-section"]}>
      <h3>Reviews</h3>
      {reviewsIds?.length ? (
        <Reviews reviewsIds={reviewsIds} />
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
