import Counter from "../../../../counter/Counter";

export default function RatingCounter({
  minRating = 1,
  maxRating = 5,
  onRatingChange,
}) {
  return (
    <div>
      <p>Your rating of the restaurant:</p>
      <Counter min={minRating} max={maxRating} onCountChange={onRatingChange} />
    </div>
  );
}
