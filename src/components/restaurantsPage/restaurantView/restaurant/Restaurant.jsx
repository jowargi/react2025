import React, { Fragment } from "react";
import Dishes from "./dishes/Dishes";
import Reviews from "./reviews/Reviews";
import ReviewForm from "./reviewForm/ReviewForm";

export default function Restaurant({ restaurant }) {
  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <div>
        <h3>Menu</h3>
        {menu?.length ? (
          <Dishes menu={menu} minPortions={0} maxPortions={5} />
        ) : (
          <p>The menu is temporarily unavailable. Try again later!</p>
        )}
      </div>
      <div>
        <h3>Reviews</h3>
        {reviews?.length ? (
          <Reviews reviews={reviews} />
        ) : (
          <>
            <p>No reviews yet. Be the first!</p>
            <button>Leave feedback</button>
          </>
        )}
      </div>
      <ReviewForm key={restaurant.id} />
    </div>
  );
}
