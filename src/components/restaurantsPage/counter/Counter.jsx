import { useCallback, useEffect, useRef } from "react";
import styles from "./Counter.module.css";
import classNames from "classnames";

export default function Counter({
  count,
  decrement,
  increment,
  themeColor = "light",
}) {
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
    <div
      className={classNames(
        styles.counter,
        styles[`counter--theme-color-${themeColor}`]
      )}
    >
      <div className={styles["count-controls"]}>
        <button
          onClick={decrement}
          className={classNames(
            styles.button,
            styles[`button--theme-color-${themeColor}`]
          )}
        >
          -
        </button>
        <span
          className={classNames(
            styles.count,
            styles[`count--theme-color-${themeColor}`]
          )}
        >
          {count}
        </span>
        <button
          onClick={increment}
          className={classNames(
            styles.button,
            styles[`button--theme-color-${themeColor}`]
          )}
        >
          +
        </button>
      </div>
      <div className={styles["timer-controls"]} style={{ display: "none" }}>
        <button
          onClick={startTimer}
          className={classNames(
            styles.button,
            styles[`button--theme-color-${themeColor}`],
            styles["timer-button"]
          )}
        >
          start
        </button>
        <button
          onClick={stopTimer}
          className={classNames(
            styles.button,
            styles[`button--theme-color-${themeColor}`],
            styles["timer-button"]
          )}
        >
          stop
        </button>
      </div>
    </div>
  );
}
