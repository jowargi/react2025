import { useSelector } from "react-redux";
import { getImageByRestaurantId } from "../../../../../../redux/features/images/getImageByRestaurantId";
import { useRequest } from "../../../../../../redux/hooks/useRequest";
import {
  selectImageById,
  selectImageErrorById,
} from "../../../../../../redux/features/images/slice";
import {
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../../../../../redux/constants";
import { useEffect, useRef } from "react";
import RestaurantPopup from "./RestaurantPopup";
import RestaurantPopupSkeleton from "../../../../../skeletons/restaurantPopup/RestaurantPopupSkeleton";

export default function RestaurantPopupContainer({
  restaurantId,
  restaurantName,
}) {
  const requestStatus = useRequest(getImageByRestaurantId, restaurantId);

  const restaurantImage = useSelector((state) =>
    selectImageById(state, restaurantId)
  );
  const restaurantImageError = useSelector((state) =>
    selectImageErrorById(state, restaurantId)
  );

  const restaurantImageUrlRef = useRef(null);

  useEffect(
    () => () => {
      if (restaurantImageUrlRef.current) {
        URL.revokeObjectURL(restaurantImageUrlRef.current);

        restaurantImageUrlRef.current = null;
      }
    },
    []
  );

  if (requestStatus === REQUEST_STATUS_IDLE) return null;

  if (requestStatus === REQUEST_STATUS_PENDING)
    return <RestaurantPopupSkeleton />;

  if (
    requestStatus === REQUEST_STATUS_REJECTED &&
    restaurantImageError?.name !== "ConditionError"
  )
    return null;

  restaurantImageUrlRef.current = URL.createObjectURL(restaurantImage);

  return (
    <RestaurantPopup
      restaurantName={restaurantName}
      restaurantImageUrl={restaurantImageUrlRef.current}
    />
  );
}
