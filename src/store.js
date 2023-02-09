import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterSlice";
import authReducer from "./features/authenticationSlice";

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
