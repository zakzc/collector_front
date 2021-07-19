import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "appContext",
  initialState: {
    // connected: true,
    currentMediaView: "Book",
    currentMediaCRUD: "read",
    dataWasSent: false,
    currentSelectedItem: null,
    backEndProcessConfirmed: false,
  },

  reducers: {
    setConnection: (state, action) => {
      state.connected = action.payload;
    },
    setCurrentMediaView: (state, action) => {
      state.currentMediaView = action.payload;
    },
    setCurrentMediaCRUD: (state, action) => {
      state.currentMediaCRUD = action.payload;
    },
    setDataWasSent: (state, action) => {
      state.dataWasSent = action.payload;
    },
    setCurrentSelectedItem: (state, action) => {
      state.currentSelectedItem = action.payload;
    },
    setBackEndProcessConfirmed: (state, action) => {
      state.backEndProcessConfirmed = action.payload;
    },
  },
});

export const {
  setConnection,
  setCurrentMediaView,
  setCurrentMediaCRUD,
  setDataWasSent,
  setCurrentSelectedItem,
  setBackEndProcessConfirmed,
} = slice.actions;
export default slice.reducer;
