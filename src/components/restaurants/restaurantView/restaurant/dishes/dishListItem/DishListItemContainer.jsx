import DishListItem from "./DishListItem";
import { useGetDishesByRestaurantIdQuery } from "../../../../../../redux/services/dishes/api";
import { useParams } from "react-router-dom";

export default function DishListItemContainer({ dishId }) {
  const { restaurantId } = useParams();

  const { data: dish } = useGetDishesByRestaurantIdQuery(restaurantId, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find((dish) => dish.id === dishId),
    }),
  });

  const { name } = dish || {};

  return name ? <DishListItem id={dishId} name={name} /> : null;
}
