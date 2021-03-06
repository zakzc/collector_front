import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api_actions";

const slice = createSlice({
  name: "user",
  initialState: {
    userID: localStorage.getItem("user_ID"),
    name: localStorage.getItem("name"),
    userConnected: false,
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
        state.userConnected = true;
        state.loading = false;
        state.error = { isError: false, message: "no errors" };
      } else if (action.payload.success === false) {
        state.loading = false;
        state.backEndProcessConfirmed = true;
        state.userConnected = false;
        state.error = { isError: true, message: action.payload.message };
      } else {
        state.error = { isError: true, message: "Unknown error" };
        state.userConnected = false;
      }
    },
    userRegistered: (state, action) => {
      if (action.payload.success === true) {
        state.backEndProcessConfirmed = true;
        state.loading = false;
        state.error = { isError: false, message: "no errors" };
        state.userConnected = false;
      } else if (action.payload.success === false) {
        state.loading = false;
        state.backEndProcessConfirmed = true;
        state.error = { isError: true, message: action.payload.message };
        state.userConnected = false;
      } else {
        state.error = { isError: true, message: "Registration Error" };
        state.userConnected = false;
      }
    },
    userRequestFailed: (state, action) => {
      state.loading = false;
      state.backEndProcessConfirmed = false;
      state.error = { isError: true, message: action.payload };
      state.userConnected = false;
      localStorage.clear();
    },
    logUserOut: (state) => {
      state.userID = null;
      state.name = null;
      state.loading = false;
      state.backEndProcessConfirmed = false;
      state.userConnected = false;
      state.error = { isError: false, message: null };
      localStorage.clear();
    },
  },
});

export const {
  userRequested,
  userRegistered,
  userReceived,
  userRequestFailed,
  registerUser,
  logUserIn,
  logUserOut,
} = slice.actions;
export default slice.reducer;

// actions

const url = "http://localhost:3001/collectors";

export const register = (userData) =>
  apiCallBegan({
    url: url + "/register",
    method: "post",
    data: userData,
    onStart: userRequested.type,
    onSuccess: userRegistered.type,
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

export const authAccess = (userData) =>
  apiCallBegan({
    url: url + "/oauth",
    method: "post",
    data: userData,
    onStart: userRequested.type,
    onSuccess: userReceived.type,
    onError: userRequestFailed.type,
  });

export const selectUserID = createSelector((state) => state);
