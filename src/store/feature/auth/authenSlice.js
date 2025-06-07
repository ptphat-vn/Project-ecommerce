import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  accessToken: localStorage.getItem("accessToken") || null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    doLogin: (state, action) => {
      const { user, access_token } = action.payload; //gửi vào trong đây để lưu
      state.user = user;
      state.accessToken = access_token;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("accessToken", access_token);
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
    },
  },
});
export const { doLogin, logout } = authSlice.actions;
export default authSlice.reducer;
