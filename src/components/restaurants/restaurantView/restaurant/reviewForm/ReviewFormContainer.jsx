import { useParams } from "react-router-dom";
import { useReviewForm } from "./useReviewForm";
import { useUser } from "../../../../userContextProvider/UserContextProvider";
import { useTimeout } from "./useTimeout";
import { useAddReviewByRestaurantIdMutation } from "../../../../../redux/services/reviews/api";
import ErrorAlert from "../../../../errorAlert/ErrorAlert";
import { useEffect, useRef } from "react";
import ReviewForm from "./ReviewForm";

export default function ReviewFormContainer() {
  const {
    formState,
    setName,
    setEmail,
    setReview,
    decrementRating,
    incrementRating,
    clear,
  } = useReviewForm();

  const [addReviewByRestaurantId, { error, isLoading, isError, reset }] =
    useAddReviewByRestaurantIdMutation({
      fixedCacheKey: "addReviewByRestaurantId",
    });

  const resetRef = useRef(reset);

  resetRef.current = reset;

  useEffect(() => () => resetRef.current(), []);

  const { restaurantId } = useParams();

  const { user } = useUser();

  const { setTimer } = useTimeout();

  const { id: userId } = user || {};

  if (!userId) return null;

  if (isError) return <ErrorAlert name={error.status} message={error.error} />;

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!formState.review.trim()) return;

    try {
      await addReviewByRestaurantId({
        restaurantId,
        review: { userId, text: formState.review, rating: +formState.rating },
      }).unwrap();

      clear();
    } catch {
      setTimer(() => {
        resetRef.current();
        clear();
      }, 3000);
    }
  };

  return (
    <ReviewForm
      formState={formState}
      setName={setName}
      setEmail={setEmail}
      setReview={setReview}
      decrementRating={decrementRating}
      incrementRating={incrementRating}
      onSubmit={onSubmit}
      onClear={clear}
      isDisabled={isLoading}
    />
  );
}
