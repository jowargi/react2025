import { createContext, useCallback, useContext, useState } from "react";

const UserContext = createContext({
  user: null,
  setUser: () => null,
});

export const useUser = () => useContext(UserContext);

export default function UserContextProvider({ children, initialUser = null }) {
  const [user, setUser] = useState(initialUser);

  const login = useCallback((user) => setUser(user), [setUser]);
  const logout = useCallback(() => setUser(null), [setUser]);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
