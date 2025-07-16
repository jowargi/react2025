import { useCallback, useState } from "react";

export function useCount({ min, max }) {
  const [count, setCount] = useState(min);

  const decrement = useCallback(
    () => setCount((count) => Math.max(count - 1, min)),
    [min]
  );

  const increment = useCallback(
    () => setCount((count) => Math.min(count + 1, max)),
    [max]
  );

  return {
    count,
    decrement,
    increment,
  };
}
