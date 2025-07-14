import RestaurantView from "./restaurantView/RestaurantView";

export default function RestaurantsPage({ title, restaurants }) {
  return (
    <section>
      <h1>{title}</h1>
      {restaurants?.length ? (
        <RestaurantView restaurants={restaurants} />
      ) : (
        <p>No restaurants</p>
      )}
    </section>
  );
}
