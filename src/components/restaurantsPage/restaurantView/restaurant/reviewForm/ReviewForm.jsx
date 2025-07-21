import { useReviewForm } from "./useReviewForm/useReviewForm";
import InputField from "./inputField/InputField";
import TextareaField from "./textareaField/TextareaField";
import RatingCounter from "./ratingCounter/RatingCounter";
import FormControls from "./formControls/FormControls";
import styles from "./ReviewForm.module.css";
import classNames from "classnames";

export default function ReviewForm({ themeColor = "light" }) {
  const {
    formState,
    setName,
    setEmail,
    setReview,
    decrementRating,
    incrementRating,
    clear,
  } = useReviewForm();

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className={classNames(
        styles.form,
        styles[`form--theme-color-${themeColor}`]
      )}
    >
      <InputField
        type="text"
        id="name-input"
        name="name"
        value={formState.name}
        onChange={(event) => setName(event.target.value)}
        labelText="Name"
        themeColor={themeColor}
      />
      <InputField
        type="email"
        id="email-input"
        name="email"
        value={formState.email}
        onChange={(event) => setEmail(event.target.value)}
        labelText="Email"
        themeColor={themeColor}
      />
      <TextareaField
        id="review-text"
        name="review"
        value={formState.review}
        onChange={(event) => setReview(event.target.value)}
        labelText="Review"
        themeColor={themeColor}
      />
      <RatingCounter
        rating={formState.rating}
        decrementRating={decrementRating}
        incrementRating={incrementRating}
        themeColor={themeColor}
      />
      <FormControls
        onClear={clear}
        onSubmit={() => null}
        themeColor={themeColor}
      />
    </form>
  );
}
