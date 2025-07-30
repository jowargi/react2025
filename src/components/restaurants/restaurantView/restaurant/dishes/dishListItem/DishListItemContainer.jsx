import { useSelector } from "react-redux";
import { selectDishById } from "../../../../../../redux/features/dishes/slice";
import DishListItem from "./DishListItem";

export default function DishListItemContainer({ dishId }) {
  const dish = useSelector((state) => selectDishById(state, dishId));

  const { name } = dish || {};

  return name ? <DishListItem id={dishId} name={name} /> : null;
}
