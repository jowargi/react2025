import { useCallback, useEffect, useRef } from "react";

export default function Counter({ count, decrement, increment }) {
  const timerIdRef = useRef(null);

  const startTimer = useCallback(() => {
    if (!timerIdRef.current)
      timerIdRef.current = setInterval(() => increment(), 1000);
  }, [increment]);

  const stopTimer = useCallback(() => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);

      timerIdRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timerIdRef.current) {
        clearInterval(timerIdRef.current);

        timerIdRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <button onClick={startTimer}>start</button>
        <button onClick={stopTimer}>stop</button>
      </div>
    </div>
  );
}
