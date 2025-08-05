import { useSelector } from "react-redux";
import {
  selectUserById,
  selectUsersError,
} from "../../../../../../../redux/features/users/slice";
import User from "./User";
import { useRequest } from "../../../../../../../redux/hooks/useRequest";
import { getUsers } from "../../../../../../../redux/features/users/getUsers";
import {
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../../../../../../redux/constants";
import UserSkeleton from "../../../../../../skeletons/user/userSkeleton";
import ErrorAlert from "../../../../../../errorAlert/ErrorAlert";

export default function UserContainer({ id }) {
  const requestStatus = useRequest(getUsers);

  const user = useSelector((state) => selectUserById(state, id));
  const usersError = useSelector(selectUsersError);

  if (requestStatus === REQUEST_STATUS_IDLE) return null;

  if (requestStatus === REQUEST_STATUS_PENDING) return <UserSkeleton />;

  if (
    requestStatus === REQUEST_STATUS_REJECTED &&
    usersError?.name !== "ConditionError"
  )
    return <ErrorAlert name={usersError.name} message={usersError.message} />;

  const { name } = user || {};

  return name ? <User name={name} /> : null;
}
