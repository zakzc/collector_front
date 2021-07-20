import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api_actions";

const slice = createSlice({
  name: "user",
  initialState: {
    userIsLoggedIn: false,
    userID: localStorage.getItem("user_ID"),
    loading: false,
    backEndProcessConfirmed: false,
    error: { isError: false, message: null },
  },

  ///
  reducers: {
    /// calls
    userRequested: (state, action) => {
      state.loading = true;
    },
    userReceived: (state, action) => {
      if (action.payload.success === true) {
        state.backEndProcessConfirmed = true;
        localStorage.setItem("user_ID", action.payload.message.id);
        localStorage.setItem("token", action.payload.message.userToken);
        localStorage.setItem("name", action.payload.message.name);
        state.userIsLoggedIn = true;
        state.userID = localStorage.getItem("user_ID");
        state.loading = false;
        state.error = { isError: false, message: "no errors" };
      } else {
        state.loading = false;
        state.backEndProcessConfirmed = true;
        state.userIsLoggedIn = false;
      }
    },
    userRequestFailed: (state, action) => {
      state.loading = false;
      state.backEndProcessConfirmed = false;
      state.userIsLoggedIn = false;
      state.error = { isError: true, message: action.payload };
      localStorage.clear();
    },
    logUserOut: (state) => {
      state.userIsLoggedIn = false;
      localStorage.clear();
    },
  },
});

export const {
  userRequested,
  userReceived,
  userRequestFailed,
  registerUser,
  logUserIn,
  logUserOut,
} = slice.actions;
export default slice.reducer;

// actions

const url = "http://localhost:3000/collectors";

export const register = (userData) =>
  apiCallBegan({
    url: url + "/register",
    method: "post",
    data: userData,
    onStart: userRequested.type,
    onSuccess: userReceived.type,
    onError: userRequestFailed.type,
  });

export const login = (userData) =>
  apiCallBegan({
    url: url + "/login",
    method: "post",
    data: userData,
    onStart: userRequested.type,
    onSuccess: userReceived.type,
    onError: userRequestFailed.type,
  });

export const selectUserID = createSelector((state) => state);
