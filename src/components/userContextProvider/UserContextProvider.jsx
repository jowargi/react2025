import { createContext, useContext, useState } from "react";

const UserContext = createContext({
  user: null,
  setUser: () => null,
});

export const useUser = () => useContext(UserContext);

export default function UserContextProvider({ children, initialUser = null }) {
  const [user, setUser] = useState(initialUser);

  return <UserContext value={{ user, setUser }}>{children}</UserContext>;
}
