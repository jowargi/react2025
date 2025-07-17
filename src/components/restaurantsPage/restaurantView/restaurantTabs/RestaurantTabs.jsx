import RestaurantTab from "./restaurantTab/RestaurantTab";

export default function RestaurantTabs({
  restaurants,
  activeRestaurant,
  setActiveRestaurant,
}) {
  return (
    <div
      onClick={(event) => {
        return onClick(restaurants, setActiveRestaurant, event);
      }}
    >
      {restaurants.map((restaurant) => (
        <RestaurantTab
          key={restaurant.id}
          restaurant={restaurant}
          isDisabled={restaurant.id === activeRestaurant.id}
        />
      ))}
    </div>
  );
}

function onClick(restaurants, setActiveRestaurant, event) {
  const restaurantId = event.target.dataset.restaurantId;

  if (!restaurantId) return;

  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === restaurantId
  );

  if (!restaurant) return;

  setActiveRestaurant(restaurant);
}
