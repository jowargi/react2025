import styles from "./ReviewListItem.module.css";
import classNames from "classnames";
import { useThemeColor } from "../../../../../themeColorContextProvider/ThemeColorContextProvider";
import UserContainer from "./user/UserContainer";
import { useUser } from "../../../../../userContextProvider/UserContextProvider";
import { useEditMode } from "./useEditMode";
import { useCallback } from "react";
import ReviewForm from "../../reviewForm/ReviewForm";

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
        <ReviewForm
          formState={formState}
          setText={setText}
          decrementRating={decrementRating}
          incrementRating={incrementRating}
          onSubmit={onSubmit}
          onClear={onClear}
          isDisabled={isDisabled}
        />
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
