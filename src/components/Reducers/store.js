import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./counter/CounterSlice";
export const Store = configureStore ({
    reducer: {
        counter: CounterSlice,
    },
})