import styles from "./Reviews.module.css";
import ErrorAlert from "../../../../errorAlert/ErrorAlert";
import ReviewListItemContainer from "./reviewListItem/ReviewListItemContainer";
import ReviewsSkeleton from "../../../../skeletons/reviews/ReviewsSkeleton";
import { useGetUsersQuery } from "../../../../../redux/services/users/api";

export default function Reviews({ reviewsIds }) {
  const { error, isLoading, isError, isFetching } = useGetUsersQuery();

  if (isLoading || isFetching)
    return <ReviewsSkeleton reviewsTotal={reviewsIds.length} />;

  if (isError) return <ErrorAlert name={error.name} message={error.message} />;

  return (
    <ul className={styles["reviews-list"]}>
      {reviewsIds.map((reviewId) => (
        <ReviewListItemContainer key={reviewId} reviewId={reviewId} />
      ))}
    </ul>
  );
}
