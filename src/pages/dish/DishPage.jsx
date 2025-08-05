import { useParams } from "react-router-dom";
import DishContainer from "../../components/dish/DishContainer";
import { useRequest } from "../../redux/hooks/useRequest";
import { getDishById } from "../../redux/features/dishes/getDishById";
import { useSelector } from "react-redux";
import { selectDishErrorById } from "../../redux/features/dishes/slice";
import {
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../redux/constants";
import DishPageSkeleton from "../../components/skeletons/dishPage/dishPageSkeleton";
import ErrorAlert from "../../components/errorAlert/ErrorAlert";

export default function DishPage() {
  const { dishId } = useParams();

  const requestStatus = useRequest(getDishById, dishId);

  const dishError = useSelector((state) => selectDishErrorById(state, dishId));

  if (requestStatus === REQUEST_STATUS_IDLE) return null;

  if (requestStatus === REQUEST_STATUS_PENDING) return <DishPageSkeleton />;

  if (
    requestStatus === REQUEST_STATUS_REJECTED &&
    dishError?.name !== "ConditionError"
  )
    return <ErrorAlert name={dishError.name} message={dishError.message} />;

  return <DishContainer id={dishId} />;
}
