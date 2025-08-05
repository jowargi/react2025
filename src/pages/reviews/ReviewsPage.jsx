import { useParams } from "react-router-dom";
import { useThemeColor } from "../../components/themeColorContextProvider/ThemeColorContextProvider";
import { useSelector } from "react-redux";
import Reviews from "../../components/restaurants/restaurantView/restaurant/reviews/Reviews";
import styles from "./ReviewsPage.module.css";
import classNames from "classnames";
import { useRequest } from "../../redux/hooks/useRequest";
import { getReviewsByRestaurantId } from "../../redux/features/restaurantReviews/getReviewsByRestaurantId";
import {
  selectReviewsByRestaurantId,
  selectReviewsErrorByRestaurantId,
} from "../../redux/features/restaurantReviews/slice";
import {
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
} from "../../redux/constants";
import ReviewsPageSkeleton from "../../components/skeletons/reviewsPage/ReviewsPageSkeleton";
import ErrorAlert from "../../components/errorAlert/ErrorAlert";

export default function ReviewsPage() {
  const { themeColor } = useThemeColor();
  const { restaurantId } = useParams();

  const requestStatus = useRequest(getReviewsByRestaurantId, restaurantId);

  const reviews = useSelector((state) =>
    selectReviewsByRestaurantId(state, restaurantId)
  );
  const reviewsError = useSelector((state) =>
    selectReviewsErrorByRestaurantId(state, restaurantId)
  );

  if (requestStatus === REQUEST_STATUS_IDLE) return null;

  if (requestStatus === REQUEST_STATUS_PENDING) return <ReviewsPageSkeleton />;

  if (
    requestStatus === REQUEST_STATUS_PENDING &&
    reviewsError?.name !== "ConditionError"
  )
    return (
      <ErrorAlert name={reviewsError.name} message={reviewsError.message} />
    );

  return (
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
  );
}
