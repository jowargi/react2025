import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectAmountByItemId,
} from "../../../redux/features/cart/slice";

export function useCount({ dishId, isEnabled = true }) {
  const amount =
    useSelector((state) => selectAmountByItemId(state, dishId)) || 0;
  const dispatch = useDispatch();

  const decrement = useCallback(() => {
    if (!isEnabled) return;

    dispatch(removeFromCart(dishId));
  }, [dispatch, dishId, isEnabled]);

  const increment = useCallback(() => {
    if (!isEnabled) return;

    dispatch(addToCart(dishId));
  }, [dispatch, dishId, isEnabled]);

  return {
    amount,
    decrement,
    increment,
  };
}
