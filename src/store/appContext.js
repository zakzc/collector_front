import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "appContext",
  initialState: {
    // connected: true,
    currentMediaView: "Book",
    currentMediaCRUD: "read",
    dataWasSent: false,
    currentSelectedItem: null,
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
    setCurrentSelectedItem: (state, action) => {
      state.currentSelectedItem = action.payload;
    },
    setDataWasSent: (state, action) => {
      state.dataWasSent = action.payload;
    },
  },
});

export const {
  setConnection,
  setCurrentMediaView,
  setCurrentMediaCRUD,
  setCurrentSelectedItem,
  setDataWasSent,
} = slice.actions;
export default slice.reducer;
