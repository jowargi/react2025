import styles from "./ReviewListItem.module.css";
import classNames from "classnames";
import { useThemeColor } from "../../../../../themeColorContextProvider/ThemeColorContextProvider";
import UserContainer from "./user/UserContainer";
import { useUser } from "../../../../../userContextProvider/UserContextProvider";
import { useEditMode } from "./useEditMode";
import InputField from "../../reviewForm/inputField/InputField";
import RatingCounter from "../../reviewForm/ratingCounter/RatingCounter";
import FormControls from "../../reviewForm/formControls/FormControls";
import { useCallback } from "react";

export default function ReviewListItem({
  userId,
  text,
  formState,
  setText,
  decrementRating,
  incrementRating,
  clear,
  onSubmit,
  isDisabled,
}) {
  const { user } = useUser();
  const { themeColor } = useThemeColor();

  const { isEditing, startEditing, stopEditing } = useEditMode(false);

  const onClear = useCallback(() => {
    clear();
    stopEditing();
  }, [clear, stopEditing]);

  return (
    <li
      className={classNames(
        styles["review-item"],
        styles[`review-item--theme-color-${themeColor}`]
      )}
    >
      <UserContainer userId={userId} />
      {user?.id === userId && isEditing ? (
        <form
          onSubmit={onSubmit}
          className={classNames(
            styles.form,
            styles[`form--theme-color-${themeColor}`]
          )}
        >
          <InputField
            type="text"
            id="review-editing-text"
            name="text"
            value={formState.text}
            onChange={(event) => setText(event.target.value)}
            labelText="Edit review text"
          />
          <RatingCounter
            rating={formState.rating}
            decrementRating={decrementRating}
            incrementRating={incrementRating}
          />
          <FormControls onClear={onClear} isDisabled={isDisabled} />
        </form>
      ) : (
        <p
          className={classNames(
            styles["review-text"],
            styles[`review-text--theme-color-${themeColor}`]
          )}
        >
          {text}
        </p>
      )}
      {user?.id === userId && !isEditing ? (
        <button
          onClick={startEditing}
          className={classNames(
            styles.button,
            styles[`button--theme-color-${themeColor}`]
          )}
        >
          Edit
        </button>
      ) : null}
    </li>
  );
}
