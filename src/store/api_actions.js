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
