import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../../materials/normalized-mock";

const initialState = {
  ids: normalizedUsers.map((user) => user.id),
  users: normalizedUsers.reduce((users, user) => {
    users[user.id] = user;

    return users;
  }, {}),
};

export const usersSlice = createSlice({
  name: "users",
  initialState,

  selectors: {
    selectUsersIds: (state) => state.ids,
    selectUserById: (state, id) => state.users[id],
  },
});

export const { selectUsersIds, selectUserById } = usersSlice.selectors;
