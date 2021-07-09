import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "mediaContext",
  initialState: [
    {
      connected: true,
      currentMediaView: "Book",
      currentMediaCRUD: "read",
      dataWasProcessed: false,
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
    setDataWasProcessed: (state, action) => {
      state[0].dataWasProcessed = action.payload;
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
  setDataWasProcessed,
  setCurrentSelectedItem,
} = slice.actions;
export default slice.reducer;
