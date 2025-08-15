import { useThemeColor } from "../../../../themeColorContextProvider/ThemeColorContextProvider";
import TextareaField from "./textareaField/TextareaField";
import RatingCounter from "./ratingCounter/RatingCounter";
import FormControls from "./formControls/FormControls";
import styles from "./ReviewForm.module.css";
import classNames from "classnames";

export default function ReviewForm({
  formState,
  setText,
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
      <TextareaField
        id="review-text"
        name="review"
        value={formState.text}
        onChange={(event) => setText(event.target.value)}
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
