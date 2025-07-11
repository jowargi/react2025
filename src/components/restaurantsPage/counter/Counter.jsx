import { useState } from "react";

export default function Counter({ min, max }) {
  let [count, setCount] = useState(min);

  return (
    <div>
      <button onClick={() => count > min && setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => count < max && setCount(count + 1)}>+</button>
    </div>
  );
}
