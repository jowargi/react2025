import React from "react";

export default function Restaurant({ template }) {
  let name = template.name;
  let dishes = template.menu.map((dish) => dish.name);

  let dishList = (
    <ul>
      {dishes.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  let reviews = template.reviews.map((review) => review.text);

  let reviewList = (
    <ul>
      {reviews.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <h3>Меню</h3>
        {dishList}
      </div>
      <div>
        <h3>Отзывы</h3>
        {reviewList}
      </div>
    </div>
  );
}
