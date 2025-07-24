import { useCallback, useState } from "react";

export function useCount({ min, max, isEnabled = true }) {
  const [count, setCount] = useState(min);

  const decrement = useCallback(() => {
    if (!isEnabled) return;

    setCount((count) => Math.max(count - 1, min));
  }, [isEnabled, min]);

  const increment = useCallback(() => {
    if (!isEnabled) return;

    setCount((count) => Math.min(count + 1, max));
  }, [isEnabled, max]);

  return {
    count,
    decrement,
    increment,
  };
}
