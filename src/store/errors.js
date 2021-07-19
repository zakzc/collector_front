import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "errors",
  initialState: {
    msg: {},
    id: "",
  },

  ///
  reducers: {
    addError: (state, action) => {
      state.msg = action.payload.msg;
      state.id = action.payload.id;
    },
    clearErrors: (state) => {
      state.msg = {};
      state.id = "";
    },
  },
});

export const { addError } = slice.actions;
export default slice.reducer;

// actions

export const errorExists = () => (dispatch, getState) => {
  const exists = getState().errors;
  return exists;
};
