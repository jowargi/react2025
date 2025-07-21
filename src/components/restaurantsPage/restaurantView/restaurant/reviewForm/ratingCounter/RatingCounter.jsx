import Counter from "../../../../counter/Counter";
import styles from "./RatingCounter.module.css";
import classNames from "classnames";

export default function RatingCounter({
  rating,
  decrementRating,
  incrementRating,
  themeColor = "light",
}) {
  return (
    <div
      className={classNames(
        styles["rating-counter"],
        styles[`rating-counter--theme-color-${themeColor}`]
      )}
    >
      <p
        className={classNames(
          styles.label,
          styles[`label--theme-color-${themeColor}`]
        )}
      >
        Your current rating for the restaurant:
      </p>
      <Counter
        count={rating}
        decrement={decrementRating}
        increment={incrementRating}
        themeColor={themeColor}
      />
    </div>
  );
}
