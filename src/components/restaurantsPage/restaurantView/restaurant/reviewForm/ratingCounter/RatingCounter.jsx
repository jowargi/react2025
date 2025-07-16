import Counter from "../../../../counter/Counter";

export default function RatingCounter({
  rating,
  decrementRating,
  incrementRating,
}) {
  return (
    <div>
      <p>Your current rating for the restaurant:</p>
      <Counter
        count={rating}
        decrement={decrementRating}
        increment={incrementRating}
      />
    </div>
  );
}
