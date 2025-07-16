import { useCallback, useReducer } from "react";

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
  const [formState, dispatch] = useReducer(reducer, INITIAL_FORM_STATE);

  const setName = useCallback(
    (name) => dispatch({ type: SET_NAME_ACTION, payload: name }),
    []
  );

  const setEmail = useCallback(
    (email) => dispatch({ type: SET_EMAIL_ACTION, payload: email }),
    []
  );

  const setReview = useCallback(
    (review) => dispatch({ type: SET_REVIEW_ACTION, payload: review }),
    []
  );

  const decrementRating = useCallback(
    () => dispatch({ type: DECREMENT_RATING_ACTION }),
    []
  );

  const incrementRating = useCallback(
    () => dispatch({ type: INCREMENT_RATING_ACTION }),
    []
  );

  const clear = useCallback(() => dispatch({ type: CLEAR_ACTION }), []);

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
