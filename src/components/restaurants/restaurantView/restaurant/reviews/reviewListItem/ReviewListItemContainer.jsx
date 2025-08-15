import { useParams } from "react-router-dom";
import {
  useEditReviewByIdMutation,
  useGetReviewsByRestaurantIdQuery,
} from "../../../../../../redux/services/reviews/api";
import ReviewListItem from "./ReviewListItem";
import { useReviewItemForm } from "./useReviewItemForm";

export default function ReviewListItemContainer({ reviewId }) {
  const { restaurantId } = useParams();

  const { data: review } = useGetReviewsByRestaurantIdQuery(restaurantId, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find((review) => review.id === reviewId),
    }),
  });

  const { formState, setText, decrementRating, incrementRating, clear } =
    useReviewItemForm(restaurantId, reviewId);

  const [editReviewById, { isLoading }] = useEditReviewByIdMutation();

  const { userId, text } = review || {};

  if (!userId || !text) return null;

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!formState.text.trim()) return;

    try {
      await editReviewById({
        restaurantId,
        reviewId,
        review: { ...formState },
      }).unwrap();
    } catch {
      clear();
    }
  };

  return (
    <ReviewListItem
      userId={userId}
      text={text}
      formState={formState}
      setText={setText}
      decrementRating={decrementRating}
      incrementRating={incrementRating}
      clear={clear}
      onSubmit={onSubmit}
      isDisabled={isLoading}
    />
  );
}
