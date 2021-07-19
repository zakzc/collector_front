import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api_actions";
import {
  userLoading,
  userLoadSuccess,
  authError,
  logInSuccess,
  logInFail,
  logOutSuccess,
  registerSuccess,
} from "./api_actions";

const slice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null,
  },
  ///
  reducers: {
    userLoading: (state) => {
      state.isLoading = true;
    },
    logInSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.user = action.payload;
    },
    registerSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.user = action.payload;
    },
    authError: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    logInFail: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    logOutSuccess: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    registerFail: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
});

export const { registerUser } = slice.actions;
export default slice.reducer;

// Action creators

const url = "http://localhost:3000/collectors";

export const loadUser = (userData) => {
  userLoading();
  //   const token = getState().auth.token;
  return dispatchEvent(
    apiCallBegan({
      url: url + "/login",
      method: "post",
      data: userData,
      onSuccess: logInSuccess.type,
      onError: logInFail.type,
    })
  );
};
