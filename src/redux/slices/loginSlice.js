import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  name: null,
  role: null,
};

export const loginStage = createSlice({
  name: "loginStage",
  initialState,
  reducers: {
    loginHandler: (state, action) => {
      console.log(action.payload);
      state.token = action.payload.token;
      state.name = action.payload?.data?.name;
      state.role = action.payload?.data?.role;
    },
    logoutHandler: (state) => {
      state.token = null;
      state.name = null;
      state.role = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginHandler, logoutHandler } = loginStage.actions;

export default loginStage.reducer;
