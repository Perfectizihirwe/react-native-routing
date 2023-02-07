import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/CounterSlice";
export const Store = configureStore ({
    reducer: {
        counter: counterReducer,
    },
})