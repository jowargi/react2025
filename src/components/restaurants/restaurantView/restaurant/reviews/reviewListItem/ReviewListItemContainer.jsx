import { useSelector } from "react-redux";
import { selectReviewById } from "../../../../../../redux/features/reviews/slice";
import ReviewListItem from "./ReviewListItem";

export default function ReviewListItemContainer({ reviewId }) {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  const { userId, text } = review || {};

  return userId && text ? <ReviewListItem userId={userId} text={text} /> : null;
}
