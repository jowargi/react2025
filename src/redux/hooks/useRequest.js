import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRequest, selectStatus } from "../features/requests/slice";

export const useRequest = (thunk, payload) => {
  const [request, setRequest] = useState(null);

  const dispatch = useDispatch();

  const requestStatus = useSelector((state) =>
    selectStatus(state, request?.requestId)
  );

  useEffect(() => {
    const request = dispatch(thunk(payload));

    setRequest(request);

    return () => {
      request.abort();

      setRequest(null);

      dispatch(deleteRequest(request.requestId));
    };
  }, [thunk, payload, dispatch]);

  return requestStatus;
};
