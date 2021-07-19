import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    // backEndIsOnline: false,
    userIsLoggedIn: false,
    token: null,
    userID: null,
    userCollection: [],
  },

  ///
  reducers: {
    registerUser: (state, action) => {
      state.userIsLoggedIn = action.payload.msg;
      state.token = action.payload.token;
    },
    logUserIn: (state, action) => {
      state.userIsLoggedIn = action.payload.msg;
      state.token = action.payload.token;
      state.userCollection = action.payload.userCollection;
    },
    logUserOut: (state) => {
      state.userIsLoggedIn = false;
      state.token = null;
      state.userID = null;
    },
  },
});

export const { registerUser, logUserIn, logUserOut } = slice.actions;
export default slice.reducer;

// actions

// export const errorExists = () => (dispatch, getState) => {
//   const exists = getState().errors;
//   return exists;
// };

// const url = "http://localhost:3000/collectors";

// export const loadUser = () => (dispatch, getState) => {
//   return dispatch(
//     apiCallBegan({
//       url: url + "/getAll",
//       onStart: mediasRequested.type,
//       onSuccess: mediasReceived.type,
//       onError: mediasRequestFailed.type,
//     })
//   );
// };
