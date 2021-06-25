import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "context",
  initialState: [{ connected: true, currentView: "Books" }],
  reducers: {
    setConnection: (state, action) => {
      state[0].connected = action.payload;
    },
    setCurrentView: (state, action) => {
      state[0].currentView = action.payload;
    },
  },
});

export const { setConnection } = slice.actions;
export default slice.reducer;
