import { useParams } from "react-router-dom";
import DishContainer from "../../components/dish/DishContainer";
import DishPageSkeleton from "../../components/skeletons/dishPage/dishPageSkeleton";
import ErrorAlert from "../../components/errorAlert/ErrorAlert";
import { useGetDishByIdQuery } from "../../redux/services/dishes/api";

export default function DishPage() {
  const { dishId } = useParams();

  const { error, isLoading, isFetching, isError } = useGetDishByIdQuery(dishId);

  if (isLoading || isFetching) return <DishPageSkeleton />;

  if (isError) return <ErrorAlert name={error.status} message={error.error} />;

  return <DishContainer id={dishId} />;
}
