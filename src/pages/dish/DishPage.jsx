import { useParams } from "react-router-dom";
import DishContainer from "../../components/dish/DishContainer";

export default function DishPage() {
  const { dishId } = useParams();

  return <DishContainer id={dishId} />;
}
