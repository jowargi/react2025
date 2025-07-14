import { useCallback, useReducer } from "react";
import InputField from "./inputField/InputField";
import TextareaField from "./textareaField/TextareaField";
import RatingCounter from "./ratingCounter/RatingCounter";
import FormControls from "./formControls/FormControls";

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  review: "",
  rating: 1,
  clearKey: 0,
};

const SET_NAME_ACTION = "setName";
const SET_EMAIL_ACTION = "setEmail";
const SET_REVIEW_ACTION = "setReview";
const SET_RATING_ACTION = "setRating";
const CLEAR_ACTION = "clear";

const reducer = (formState, action) => {
  switch (action.type) {
    case SET_NAME_ACTION:
      return {
        ...INITIAL_FORM_STATE,
        name: action.payload,
        clearKey: formState.clearKey,
      };

    case SET_EMAIL_ACTION:
      return { ...formState, email: action.payload };

    case SET_REVIEW_ACTION:
      return { ...formState, review: action.payload };

    case SET_RATING_ACTION:
      return { ...formState, rating: action.payload };

    case CLEAR_ACTION:
      return { ...INITIAL_FORM_STATE, clearKey: action.payload };

    default:
      return formState;
  }
};

export default function ReviewForm() {
  const [formState, dispatch] = useReducer(reducer, INITIAL_FORM_STATE);

  const onRatingChange = useCallback(
    (rating) => dispatch({ type: SET_RATING_ACTION, payload: rating }),
    []
  );

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <InputField
        type="text"
        id="name-input"
        name="name"
        value={formState.name}
        onChange={(event) =>
          dispatch({ type: SET_NAME_ACTION, payload: event.target.value })
        }
        labelText="Name"
      />
      <InputField
        type="email"
        id="email-input"
        name="email"
        value={formState.email}
        onChange={(event) =>
          dispatch({ type: SET_EMAIL_ACTION, payload: event.target.value })
        }
        labelText="Email"
      />
      <TextareaField
        id="review-text"
        name="review"
        value={formState.review}
        onChange={(event) =>
          dispatch({ type: SET_REVIEW_ACTION, payload: event.target.value })
        }
        labelText="Review"
      />
      <RatingCounter
        key={formState.clearKey}
        minRating={1}
        maxRating={5}
        onRatingChange={onRatingChange}
      />
      <FormControls
        onClear={() =>
          dispatch({ type: CLEAR_ACTION, payload: formState.clearKey + 1 })
        }
        onSubmit={() => null}
      />
    </form>
  );
}
