import { useCallback, useReducer } from "react";

const INITIAL_POPUP_STATE = {
  isHidden: true,
  left: 0,
  top: 0,
};

const SHOW_POPUP_ACTION = "showPopup";
const HIDE_POPUP_ACTION = "hidePopup";
const SET_LEFT_ACTION = "setLeft";
const SET_TOP_ACTION = "setTop";
const RESET_OFFSET_ACTION = "resetOffset";
const RESET_POPUP_ACTION = "resetPopup";

const reducer = (popupState, { type, payload }) => {
  switch (type) {
    case SHOW_POPUP_ACTION:
      return { ...popupState, isHidden: false };

    case HIDE_POPUP_ACTION:
      return { ...popupState, isHidden: true };

    case SET_LEFT_ACTION:
      return { ...popupState, left: payload };

    case SET_TOP_ACTION:
      return { ...popupState, top: payload };

    case RESET_OFFSET_ACTION:
      return {
        ...popupState,
        left: INITIAL_POPUP_STATE.left,
        top: INITIAL_POPUP_STATE.top,
      };

    case RESET_POPUP_ACTION:
      return { ...INITIAL_POPUP_STATE };

    default:
      return popupState;
  }
};

export const usePopup = () => {
  const [popupState, dispatch] = useReducer(reducer, INITIAL_POPUP_STATE);

  const showPopup = useCallback(
    () => dispatch({ type: SHOW_POPUP_ACTION }),
    []
  );

  const hidePopup = useCallback(
    () => dispatch({ type: HIDE_POPUP_ACTION }),
    []
  );

  const setLeft = useCallback(
    (left) => dispatch({ type: SET_LEFT_ACTION, payload: left }),
    []
  );

  const setTop = useCallback(
    (top) => dispatch({ type: SET_TOP_ACTION, payload: top }),
    []
  );

  const resetOffset = useCallback(
    () => dispatch({ type: RESET_OFFSET_ACTION }),
    []
  );

  const resetPopup = useCallback(
    () => dispatch({ type: RESET_POPUP_ACTION }),
    []
  );

  return {
    popupState,
    showPopup,
    hidePopup,
    setLeft,
    setTop,
    resetOffset,
    resetPopup,
  };
};
