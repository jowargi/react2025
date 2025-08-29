import { useSelector } from "react-redux";
import { getRestaurantsWithImage } from "../../../redux/features/restaurantsWithImage/getRestaurantsWithImage";
import { useRequest } from "../../../redux/hooks/useRequest";
import RestaurantView from "./RestaurantView";
import { selectRestaurantsWithImageError } from "../../../redux/features/restaurantsWithImage/slice";
import {
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../../redux/constants";
import ErrorAlert from "../../errorAlert/ErrorAlert";
import Spinner from "../../spinner/Spinner";

export default function RestaurantViewContainer({ restaurantsIds }) {
  const requestStatus = useRequest(getRestaurantsWithImage);

  const restaurantsWithImageError = useSelector(
    selectRestaurantsWithImageError
  );

  if (requestStatus === REQUEST_STATUS_IDLE) return null;

  if (requestStatus === REQUEST_STATUS_PENDING) return <Spinner />;

  if (
    requestStatus === REQUEST_STATUS_REJECTED &&
    restaurantsWithImageError?.name !== "ConditionError"
  )
    return (
      <ErrorAlert
        name={restaurantsWithImageError.name}
        message={restaurantsWithImageError.message}
      />
    );

  return <RestaurantView restaurantsIds={restaurantsIds} />;
}
