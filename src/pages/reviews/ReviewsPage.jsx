import { useParams } from "react-router-dom";
import { useThemeColor } from "../../components/themeColorContextProvider/ThemeColorContextProvider";
import Reviews from "../../components/restaurants/restaurantView/restaurant/reviews/Reviews";
import styles from "./ReviewsPage.module.css";
import classNames from "classnames";
import ReviewsPageSkeleton from "../../components/skeletons/reviewsPage/ReviewsPageSkeleton";
import ErrorAlert from "../../components/errorAlert/ErrorAlert";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/services/reviews/api";

export default function ReviewsPage() {
  const { themeColor } = useThemeColor();
  const { restaurantId } = useParams();

  const {
    data: reviews,
    error,
    isLoading,
    isError,
    isFetching,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);

  if (isLoading || isFetching) return <ReviewsPageSkeleton />;

  if (isError) return <ErrorAlert name={error.status} message={error.error} />;

  const reviewsIds = reviews?.map((review) => review.id);

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
