import ReviewListItem from "./reviewListItem/ReviewListItem";
import styles from "./Reviews.module.css";

export default function Reviews({ reviews }) {
  return (
    <ul className={styles["reviews-list"]}>
      {reviews.map((review) => (
        <ReviewListItem key={review.id} review={review} />
      ))}
    </ul>
  );
}
