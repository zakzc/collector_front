// import { createSlice } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";
// // import axios from "axios";
// /// comps
// import { apiCallBegan } from "./api_actions";

// const slice = createSlice({
//   name: "users",
//   initialState: { currentUser: {}, loading: false, lastFetch: null },
//   ///
//   reducers: {
//     /// calls
//     usersRequested: (users, action) => {
//       users.loading = true;
//     },
//     usersReceived: (books, action) => {
//       users.currentUser = action.payload.data;
//       users.loading = false;
//       users.lastFetch = Date.now();
//     },
//     usersRequestFailed: (books, action) => {
//       users.loading = false;
//     },
//     usersAssignedToUser: (books, action) => {
//       const { id: mediaId, userId } = action.payload;
//       const index = books.listOfUsers.findIndex((book) => users.id === mediaId);
//       users.listOfUsers[index].userId = userId;
//     },
//     /// events
//     usersAdded: (books, action) => {
//       users.listOfUsers.push(action.payload.data);
//       console.log("added", users.listOfUsers);
//     },

//     usersRemoved: (books, action) => {
//       users = users.listOfUsers.filter((i) => i.id !== action.payload.id);
//     },

//     usersUpdated: (state, action) => {
//       const index = state.listOfUsers.findIndex(
//         (book) => users.id === action.payload.id
//       );
//       // console.log("found", index);
//       state.listOfUsers[index] = {
//         collector: action.payload.collector,
//         typeOfMedia: action.payload.typeOfMedia,
//         title: action.payload.title,
//         author: action.payload.author,
//         genre: action.payload.genre,
//         mediaID: action.payload.mediaID,
//         quantity: action.payload.quantity,
//         sellable: action.payload.sellable,
//         dateOfPurchase: action.payload.dateOfPurchase,
//         price: action.payload.price,
//         details: action.payload.details,
//       };
//     },
//   },
// });

// export const {
//   usersRequested,
//   usersReceived,
//   usersRequestFailed,
//   usersAssignedToUser,
//   usersAdded,
//   usersRemoved,
//   usersUpdated,
// } = slice.actions;
// export default slice.reducer;

// // Action creators

// const url = "http://localhost:3000/collectors";
// // const header = { "Content-type": "application/x-www-form-urlencoded" };

// let fetchTimer = new Date().getTime();
// let initialFetch = true;
// let timeDifference;

// export const loadUser = () => (dispatch, getState) => {
//   let now = new Date().getTime();
//   timeDifference = now - fetchTimer;
//   // console.info("Values pre-conditional :", initialFetch, timeDifference);
//   if (timeDifference > 300000 || initialFetch === true) {
//     fetchTimer = new Date().getTime();
//     initialFetch = false;
//     // console.info("Got data. Values:", initialFetch, timeDifference);
//     return dispatch(
//       apiCallBegan({
//         url: url + "/getAll",
//         onStart: usersRequested.type,
//         onSuccess: usersReceived.type,
//         onError: usersRequestFailed.type,
//       })
//     );
//   } else {
//     return;
//   }
// };

// export const register = (user) =>
//   apiCallBegan({
//     url: url + "/register",
//     method: "post",
//     data: users,
//     onSuccess: usersAdded.type,
//   });
