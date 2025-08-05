import { createAsyncThunk } from "@reduxjs/toolkit";
import HttpError from "../../../errors/HttpError";
import { selectUsersTotal } from "./slice";

export const getUsers = createAsyncThunk(
  "users/getUsers",

  async (_, { rejectWithValue, signal }) => {
    const response = await fetch("http://localhost:3001/api/users/", {
      signal,
    });

    if (!response.ok) return rejectWithValue(new HttpError(response.status));

    const users = await response.json();

    if (!users?.length) return rejectWithValue(new Error("No users found"));

    return users;
  },

  {
    condition: (_, { getState }) => !selectUsersTotal(getState()),
    dispatchConditionRejection: true,
  }
);
