import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  showPassword: {
    password: false,
    confirmPassword: false,
  },
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    togglePasswordVisibility: (state, action) => {
      const field = action.payload;
      state.showPassword[field] = !state.showPassword[field];
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});

export const {
  setUsername,
  setEmail,
  setPassword,
  setConfirmPassword,
  togglePasswordVisibility,
  setToken,
  logout,
} = authSlice.actions;
export default authSlice.reducer;
