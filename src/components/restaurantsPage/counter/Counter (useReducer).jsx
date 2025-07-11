import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "decrement":
      return state.count > state.min
        ? { ...state, count: state.count - 1 }
        : state;

    case "increment":
      return state.count < state.max
        ? { ...state, count: state.count + 1 }
        : state;
  }
}

export default function Counter({ min, max }) {
  let [state, dispatch] = useReducer(reducer, { count: min, min, max });

  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}
