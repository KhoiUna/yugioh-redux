import { createSlice } from "@reduxjs/toolkit";

export const deckSlice = createSlice({
  name: "deck",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment, decrement, incrementByAmount } = deckSlice.actions;
export default deckSlice.reducer;

export const selectCount = (state) => state.counter.value;
