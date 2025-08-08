import { useSelector } from "react-redux";
import { getUsers } from "../../../../../redux/features/users/getUsers";
import { useRequest } from "../../../../../redux/hooks/useRequest";
import styles from "./Reviews.module.css";
import { selectUsersError } from "../../../../../redux/features/users/slice";
import {
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../../../../redux/constants";
import ErrorAlert from "../../../../errorAlert/ErrorAlert";
import ReviewListItemContainer from "./reviewListItem/ReviewListItemContainer";
import ReviewsSkeleton from "../../../../skeletons/reviews/ReviewsSkeleton";

export default function Reviews({ reviewsIds }) {
  const requestStatus = useRequest(getUsers);

  const usersError = useSelector(selectUsersError);

  if (requestStatus === REQUEST_STATUS_IDLE) return null;

  if (requestStatus === REQUEST_STATUS_PENDING)
    return <ReviewsSkeleton reviewsTotal={reviewsIds.length} />;

  if (
    requestStatus === REQUEST_STATUS_REJECTED &&
    usersError?.name !== "ConditionError"
  )
    return <ErrorAlert name={usersError.name} message={usersError.message} />;

  return (
    <ul className={styles["reviews-list"]}>
      {reviewsIds.map((reviewId) => (
        <ReviewListItemContainer key={reviewId} reviewId={reviewId} />
      ))}
    </ul>
  );
}
