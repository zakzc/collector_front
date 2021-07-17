import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "mediaContext",
  initialState: [
    {
      connected: true,
      currentMediaView: "Book",
      currentMediaCRUD: "read",
      dataWasSent: false,
      currentSelectedItem: null,
    },
  ],
  reducers: {
    setConnection: (state, action) => {
      state[0].connected = action.payload;
    },
    setCurrentMediaView: (state, action) => {
      state[0].currentMediaView = action.payload;
    },
    setCurrentMediaCRUD: (state, action) => {
      state[0].currentMediaCRUD = action.payload;
    },
    setDataWasSent: (state, action) => {
      state[0].dataWasSent = action.payload;
    },
    setCurrentSelectedItem: (state, action) => {
      state[0].currentSelectedItem = action.payload;
    },
  },
});

export const {
  setConnection,
  setCurrentMediaView,
  setCurrentMediaCRUD,
  setDataWasSent,
  setCurrentSelectedItem,
} = slice.actions;
export default slice.reducer;
