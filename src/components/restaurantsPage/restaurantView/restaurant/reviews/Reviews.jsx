import ReviewListItem from "./reviewListItem/ReviewListItem";

export default function Reviews({ reviews }) {
  return (
    <ul>
      {reviews.map((review) => (
        <ReviewListItem key={review.id} review={review} />
      ))}
    </ul>
  );
}
