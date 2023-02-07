import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    customCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, customCount } = countSlice.actions;

export default countSlice.reducer;
