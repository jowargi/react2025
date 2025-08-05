import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./getUsers";

const usersAdapter = createEntityAdapter({
  selectId: (user) => user.id,
});

export const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState({ error: null }),

  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        usersAdapter.setAll(state, payload);

        state.error = null;
      })
      .addCase(getUsers.rejected, (state, { payload, error }) => {
        state.error = payload || error;
      });
  },

  selectors: {
    selectUsersError: (state) => state.error,
  },
});

export const {
  selectIds: selectUsersIds,
  selectById: selectUserById,
  selectTotal: selectUsersTotal,
} = usersAdapter.getSelectors((state) => state[usersSlice.name]);

export const { selectUsersError } = usersSlice.selectors;
