import RestaurantTab from "./restaurantTab/RestaurantTab";

export default function RestaurantTabs({ restaurants, setActiveRestaurant }) {
  return (
    <div
      onClick={function (event) {
        return onClick.call(this, restaurants, setActiveRestaurant, event);
      }}
    >
      {restaurants.map((restaurant) => (
        <RestaurantTab key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

function onClick(restaurants, setActiveRestaurant, event) {
  const restaurantId = event.target.dataset.restaurantId;

  if (!restaurantId) return;

  const restaurant = restaurants.find((restaurant) =>
    Object.is(restaurant.id, restaurantId)
  );

  if (!restaurant) return;

  setActiveRestaurant(restaurant);
}
