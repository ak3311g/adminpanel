import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    login : (state, action) => {
      console.log(action.payload)
      state.user = action.payload;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.role = null;
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const {logout, login, setToken } = authSlice.actions;

export default authSlice.reducer;
