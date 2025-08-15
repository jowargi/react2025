import { useCallback, useReducer } from "react";
import { useUser } from "../../../../userContextProvider/UserContextProvider";

const INITIAL_FORM_STATE = {
  text: "",
  rating: 1,
};

const SET_TEXT_ACTION = "setText";
const DECREMENT_RATING_ACTION = "decrementRating";
const INCREMENT_RATING_ACTION = "incrementRating";
const CLEAR_ACTION = "clear";

const reducer = (formState, action) => {
  switch (action.type) {
    case SET_TEXT_ACTION:
      return { ...formState, text: action.payload };

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

  const setText = useCallback(
    (text) => safeDispatch({ type: SET_TEXT_ACTION, payload: text }),
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
    setText,
    decrementRating,
    incrementRating,
    clear,
  };
}
