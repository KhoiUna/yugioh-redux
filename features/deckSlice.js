import { createSlice } from "@reduxjs/toolkit";

export const deckSlice = createSlice({
  name: "deck",
  initialState: {
    deck: [],
  },
  reducers: {
    addToDeck: (state, action) => {
      const card = action.payload;
      state.push(card);
    },
    removeFromDeck: (state, action) => {
      //
    },
  },
});

export const { addToDeck } = deckSlice.actions;
export default deckSlice.reducer;

export const selectDeck = (state) => state.deck.deck;
