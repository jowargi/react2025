import { useCallback, useReducer } from "react";
import { useUser } from "../../../../../userContextProvider/UserContextProvider";

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  review: "",
  rating: 1,
};

const SET_NAME_ACTION = "setName";
const SET_EMAIL_ACTION = "setEmail";
const SET_REVIEW_ACTION = "setReview";
const DECREMENT_RATING_ACTION = "decrementRating";
const INCREMENT_RATING_ACTION = "incrementRating";
const CLEAR_ACTION = "clear";

const reducer = (formState, action) => {
  switch (action.type) {
    case SET_NAME_ACTION:
      return {
        ...INITIAL_FORM_STATE,
        name: action.payload,
      };

    case SET_EMAIL_ACTION:
      return { ...formState, email: action.payload };

    case SET_REVIEW_ACTION:
      return { ...formState, review: action.payload };

    case DECREMENT_RATING_ACTION:
      return { ...formState, rating: Math.max(formState.rating - 1, 1) };

    case INCREMENT_RATING_ACTION:
      return { ...formState, rating: Math.min(formState.rating + 1, 5) };

    case CLEAR_ACTION:
      return { ...INITIAL_FORM_STATE };

    default:
      return formState;
  }
};

export function useReviewForm() {
  const { user } = useUser();
  const [formState, dispatch] = useReducer(reducer, INITIAL_FORM_STATE);

  const safeDispatch = useCallback(
    (action) => {
      if (!user) return;

      dispatch(action);
    },
    [user, dispatch]
  );

  const setName = useCallback(
    (name) => safeDispatch({ type: SET_NAME_ACTION, payload: name }),
    [safeDispatch]
  );

  const setEmail = useCallback(
    (email) => safeDispatch({ type: SET_EMAIL_ACTION, payload: email }),
    [safeDispatch]
  );

  const setReview = useCallback(
    (review) => safeDispatch({ type: SET_REVIEW_ACTION, payload: review }),
    [safeDispatch]
  );

  const decrementRating = useCallback(
    () => safeDispatch({ type: DECREMENT_RATING_ACTION }),
    [safeDispatch]
  );

  const incrementRating = useCallback(
    () => safeDispatch({ type: INCREMENT_RATING_ACTION }),
    [safeDispatch]
  );

  const clear = useCallback(
    () => safeDispatch({ type: CLEAR_ACTION }),
    [safeDispatch]
  );

  return {
    formState,
    setName,
    setEmail,
    setReview,
    decrementRating,
    incrementRating,
    clear,
  };
}
