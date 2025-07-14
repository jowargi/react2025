import { useCallback, useState } from "react";

export default function Counter({ min, max, onCountChange }) {
  const [count, setCount] = useState(min);

  const updateCount = useCallback(
    (count) => {
      setCount(count);
      onCountChange?.(count);
    },
    [onCountChange]
  );

  return (
    <div>
      <button onClick={() => count > min && updateCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => count < max && updateCount(count + 1)}>+</button>
    </div>
  );
}
