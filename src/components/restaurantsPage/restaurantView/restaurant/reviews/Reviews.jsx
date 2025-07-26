import ReviewListItem from "./reviewListItem/ReviewListItem";
import ReviewListItemContainer from "./reviewListItem/ReviewListItemContainer";
import styles from "./Reviews.module.css";

export default function Reviews({ reviewsIds }) {
  return (
    <ul className={styles["reviews-list"]}>
      {reviewsIds.map((reviewId) => (
        <ReviewListItemContainer key={reviewId} reviewId={reviewId} />
      ))}
    </ul>
  );
}
