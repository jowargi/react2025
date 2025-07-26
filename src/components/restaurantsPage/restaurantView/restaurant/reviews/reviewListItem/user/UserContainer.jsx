import { useSelector } from "react-redux";
import { selectUserById } from "../../../../../../../redux/features/users/slice";
import User from "./User";

export default function UserContainer({ id }) {
  const user = useSelector((state) => selectUserById(state, id));

  const { name } = user || {};

  return name ? <User name={name} /> : null;
}
