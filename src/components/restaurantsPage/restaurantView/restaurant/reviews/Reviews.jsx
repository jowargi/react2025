import ReviewListItem from "./reviewListItem/ReviewListItem";
import styles from "./Reviews.module.css";

export default function Reviews({ reviews, themeColor = "light" }) {
  return (
    <ul className={styles["reviews-list"]}>
      {reviews.map((review) => (
        <ReviewListItem
          key={review.id}
          review={review}
          themeColor={themeColor}
        />
      ))}
    </ul>
  );
}
