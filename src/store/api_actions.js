import { createAction } from "@reduxjs/toolkit";
/// api
export const apiCallBegan = createAction("api/callBegan");
export const apiCallSuccess = createAction("api/callSuccess");
export const apiCallFailed = createAction("api/callFailed");
// appContext
export const setConnection = createAction("appContext/setConnection");
export const setCurrentMediaView = createAction(
  "appContext/setCurrentMediaView"
);
export const setCurrentMediaCRUD = createAction(
  "appContext/setCurrentMediaCRUD"
);
export const setDataWasSent = createAction("appContext/setDataWasSent");
export const setCurrentSelectedItem = createAction(
  "appContext/setCurrentSelectedItem"
);
export const setBackEndProcessConfirmed = createAction(
  "appContext/setBackEndProcessConfirmed"
);
// auth
export const authError = createAction("auth/authError");
export const logInSuccess = createAction("auth/logInSuccess");
export const logInFail = createAction("auth/logInFail");
export const logOutSuccess = createAction("auth/logOutSuccess");
export const registerSuccess = createAction("auth/registerSuccess");
/// error
//export const addError = createAction("errors/addError");
export const getErrors = createAction("errors/getErrors");
export const clearErrors = createAction("errors/clearErrors");
/// user
export const userLoading = createAction("user/userLoading");
export const userLoadSuccess = createAction("user/userLoadSuccess");
