import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "context",
  initialState: [{ connected: true, currentMediaView: "Books" }],
  reducers: {
    setConnection: (state, action) => {
      state[0].connected = action.payload;
    },
    setCurrentMediaView: (state, action) => {
      state[0].currentMediaView = action.payload;
    },
  },
});

export const { setConnection, setCurrentMediaView } = slice.actions;
export default slice.reducer;
