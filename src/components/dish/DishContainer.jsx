import Dish from "./Dish";
import { useGetDishByIdQuery } from "../../redux/services/dishes/api";

export default function DishContainer({ id }) {
  const { data: dish } = useGetDishByIdQuery(id);

  const { name, price, ingredients } = dish || {};

  return name && price && ingredients ? (
    <Dish id={id} name={name} price={price} ingredients={ingredients} />
  ) : null;
}
