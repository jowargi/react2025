import React from "react";
import Review from "./review/Review";

export default function Reviews({ reviews }) {
  return (
    <ul>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
}
