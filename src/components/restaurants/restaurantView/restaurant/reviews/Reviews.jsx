import ReviewListItem from "./reviewListItem/ReviewListItem";
import styles from "./Reviews.module.css";

export default function Reviews({ reviews }) {
  return (
    <ul className={styles["reviews-list"]}>
      {reviews.map((review) => {
        const { id, userId, text } = review || {};

        return id && userId && text ? (
          <ReviewListItem key={id} userId={userId} text={text} />
        ) : null;
      })}
    </ul>
  );
}
