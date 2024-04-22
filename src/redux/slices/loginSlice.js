import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

export const loginStage = createSlice({
  name: "loginStage",
  initialState,
  reducers: {
    loginHandler: (state, action) => {
      state.token = action.payload.token;
    },
    logoutHandler: (state) => {
      state.token = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginHandler, logoutHandler } = loginStage.actions;

export default loginStage.reducer;
