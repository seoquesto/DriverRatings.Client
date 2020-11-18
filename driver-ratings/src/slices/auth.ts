import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthState } from "../types";

export const initialState: AuthState = {
  isAuthenticated: false,
  loading: true,
  accessToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.loading = true;
    },

    loginSuccess: (state, { payload }: PayloadAction<any>) => {
      state.loading = false;
    },

    loginError: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
    },

    logout: (state) => {
      state.loading = true;
    },

    logoutSuccess: (state) => {
      state.loading = false;
    },
  },
});

export const {
  login,
  loginSuccess,
  loginError,
  logout,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
