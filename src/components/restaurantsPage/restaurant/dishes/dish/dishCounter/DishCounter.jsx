import React from "react";
import { useState } from "react";

export default function DishCounter({ minCount, maxCount }) {
  const [count, setCount] = useState(minCount);

  return (
    <div>
      <button onClick={() => count > minCount && setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => count < maxCount && setCount(count + 1)}>+</button>
    </div>
  );
}
