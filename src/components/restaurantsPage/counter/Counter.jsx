import styles from "./Counter.module.css";
import classNames from "classnames";
import { useThemeColor } from "../../themeColorContextProvider/ThemeColorContextProvider";
import CounterButton from "./counterButton/CounterButton";

export default function Counter({ count, decrement, increment }) {
  const { themeColor } = useThemeColor();

  return (
    <div
      className={classNames(
        styles.counter,
        styles[`counter--theme-color-${themeColor}`]
      )}
    >
      <div className={styles["count-controls"]}>
        <CounterButton text="-" onClick={decrement} />
        <span
          className={classNames(
            styles.count,
            styles[`count--theme-color-${themeColor}`]
          )}
        >
          {count}
        </span>
        <CounterButton text="+" onClick={increment} />
      </div>
    </div>
  );
}
