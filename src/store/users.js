import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api_actions";

const slice = createSlice({
  name: "user",
  initialState: {
    userIsLoggedIn: false,
    token: null,
    userID: null,
    userName: null,
    loading: false,
    backEndProcessConfirmed: false,
    error: "",
  },

  ///
  reducers: {
    /// calls
    userRequested: (state, action) => {
      state.loading = true;
    },
    userReceived: (state, action) => {
      if (action.payload.success === true) {
        // state.user.token = action.payload.token;
        state.userIsLoggedIn = true;
        state.userID = action.payload.message.id;
        state.userName = action.payload.message.name;
        state.token = action.payload.message.userToken;
        state.backEndProcessConfirmed = true;
      }
      state.loading = false;
      state.backEndProcessConfirmed = true;
    },
    userRequestFailed: (state, action) => {
      state.loading = false;
      state.backEndProcessConfirmed = false;
      state.token = null;
      state.userIsLoggedIn = false;
      state.userID = null;
      state.error = action.payload;
    },
    logUserOut: (state) => {
      state.userIsLoggedIn = false;
      state.token = null;
      state.userID = null;
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
