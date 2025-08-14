import { useThemeColor } from "../../../../themeColorContextProvider/ThemeColorContextProvider";
import InputField from "./inputField/InputField";
import TextareaField from "./textareaField/TextareaField";
import RatingCounter from "./ratingCounter/RatingCounter";
import FormControls from "./formControls/FormControls";
import styles from "./ReviewForm.module.css";
import classNames from "classnames";

export default function ReviewForm({
  formState,
  setName,
  setEmail,
  setReview,
  decrementRating,
  incrementRating,
  onSubmit,
  onClear,
  isDisabled,
}) {
  const { themeColor } = useThemeColor();

  return (
    <form
      onSubmit={onSubmit}
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
      <FormControls onClear={onClear} isDisabled={isDisabled} />
    </form>
  );
}
