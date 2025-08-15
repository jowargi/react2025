import { useCallback, useReducer, useRef } from "react";
import { selectReviewById } from "../../../../../../redux/services/reviews/api";
import { store } from "../../../../../../redux/store";
import { useUser } from "../../../../../userContextProvider/UserContextProvider";

const SET_TEXT_ACTION = "setText";
const DECREMENT_RATING_ACTION = "decrementRating";
const INCREMENT_RATING_ACTION = "incrementRating";
const CLEAR_ACTION = "clear";

export const useReviewItemForm = (restaurantId, reviewId) => {
  const INITIAL_FORM_STATE_REF = useRef(null);

  INITIAL_FORM_STATE_REF.current = {
    ...selectReviewById(store.getState(), restaurantId, reviewId),
  };

  delete INITIAL_FORM_STATE_REF.current.id;

  const reducer = useCallback((formState, { type, payload }) => {
    switch (type) {
      case SET_TEXT_ACTION:
        return { ...formState, text: payload };

      case DECREMENT_RATING_ACTION:
        return { ...formState, rating: Math.max(formState.rating - 1, 1) };

      case INCREMENT_RATING_ACTION:
        return { ...formState, rating: Math.min(formState.rating + 1, 5) };

      case CLEAR_ACTION:
        return { ...INITIAL_FORM_STATE_REF.current };

      default:
        return formState;
    }
  }, []);

  const [formState, dispatch] = useReducer(
    reducer,
    INITIAL_FORM_STATE_REF.current
  );

  const { user } = useUser();

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

  return { formState, setText, decrementRating, incrementRating, clear };
};
