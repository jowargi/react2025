import { useReviewForm } from "./useReviewForm/useReviewForm";
import InputField from "./inputField/InputField";
import TextareaField from "./textareaField/TextareaField";
import RatingCounter from "./ratingCounter/RatingCounter";
import FormControls from "./formControls/FormControls";

export default function ReviewForm() {
  const {
    formState,
    setName,
    setEmail,
    setReview,
    decrementRating,
    incrementRating,
    clear,
  } = useReviewForm({ minRating: 1, maxRating: 5 });

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <InputField
        type="text"
        id="name-input"
        name="name"
        value={formState.name}
        onChange={(event) => setName(event.target.value)}
        labelText="Name"
      />
      <InputField
        type="email"
        id="email-input"
        name="email"
        value={formState.email}
        onChange={(event) => setEmail(event.target.value)}
        labelText="Email"
      />
      <TextareaField
        id="review-text"
        name="review"
        value={formState.review}
        onChange={(event) => setReview(event.target.value)}
        labelText="Review"
      />
      <RatingCounter
        rating={formState.rating}
        decrementRating={decrementRating}
        incrementRating={incrementRating}
      />
      <FormControls onClear={() => clear()} onSubmit={() => null} />
    </form>
  );
}
