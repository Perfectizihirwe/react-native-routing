import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ToastAndroid } from "react-native";
import { setItemAsync } from "expo-secure-store";

const initialState = {
  userData: {},
  isLoggedIn: false,
  token: "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    login: (state, action) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    storeToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.userData = {};
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

export const { logout, storeToken, login } = authSlice.actions;
export default authSlice.reducer;

export const loginUser = (body) => async (dispatch) => {
  try {
    const response = await axios({
      method: "POST",
      url: "https://dead-blue-nightingale-kit.cyclic.app/api/user/login",
      data: body,
    });
    console.log(response.data);
    dispatch(login(response.data.data));
    setItemAsync("userInformation", JSON.stringify(response.data.data));
    dispatch(storeToken(response.data.token));
    setItemAsync("userToken", JSON.stringify(response.data.token));
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = (body) => async (dispatch) => {
  try {
    const response = await axios({
      method: "POST",
      url: "https://dead-blue-nightingale-kit.cyclic.app/api/user/signup",
      data: body,
    });
    console.log(response.data);
    dispatch(signUp(response));
  } catch {}
};
