import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/features/dishes/slice";
import Dish from "./Dish";

export default function DishContainer({ id }) {
  const dish = useSelector((state) => selectDishById(state, id));

  const { name, price, ingredients } = dish || {};

  return name && price && ingredients ? (
    <Dish id={id} name={name} price={price} ingredients={ingredients} />
  ) : null;
}
