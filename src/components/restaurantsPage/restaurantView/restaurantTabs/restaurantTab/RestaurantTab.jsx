export default function RestaurantTab({ restaurant, isDisabled }) {
  return (
    <button data-restaurant-id={restaurant.id} disabled={isDisabled}>
      {restaurant.name}
    </button>
  );
}
