import { useGetUsersQuery } from "../../../../../../../redux/services/users/api";
import User from "./User";

export default function UserContainer({ userId }) {
  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find((user) => user.id === userId),
    }),
  });

  const { name } = user || {};

  return name ? <User name={name} /> : null;
}
