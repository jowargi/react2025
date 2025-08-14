import { useCallback, useEffect, useRef } from "react";

export const useTimeout = () => {
  const timerIdRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerIdRef.current) clearTimeout(timerIdRef.current);
    };
  }, []);

  const clearTimer = useCallback(() => {
    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);

      timerIdRef.current = null;
    }
  }, []);

  const setTimer = useCallback(
    (callback, delay) => {
      clearTimer();

      timerIdRef.current = setTimeout(callback, delay);
    },
    [clearTimer]
  );

  return { setTimer, clearTimer };
};
