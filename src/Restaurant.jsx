import React from "react";

export default function Restaurant({ restaurant }) {
  const name = restaurant.name;

  const dishes = (
    <ul>
      {restaurant.menu.map((dish) => (
        <li key={dish.id}>{dish.name}</li>
      ))}
    </ul>
  );

  const reviews = (
    <ul>
      {restaurant.reviews.map((review) => (
        <li key={review.id}>{review.text}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <h2>{name}</h2>
      <div>
        <h3>Меню</h3>
        {dishes}
      </div>
      <div>
        <h3>Отзывы</h3>
        {reviews}
      </div>
    </div>
  );
}
