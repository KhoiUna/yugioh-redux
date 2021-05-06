import { createSlice } from "@reduxjs/toolkit";
import Cards from "../utils/Cards";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: null,
    lastPage: null,
  },
  reducers: {
    loadCards: (state, action) => {
      state.cards = action.payload;
      state.lastPage = Math.floor(action.payload.length / 20) + 1;
    },
    addToDeck: (state, action) => {
      const card = action.payload;
      state.push(card);
    },
    removeFromDeck: (state, action) => {
      //
    },
  },
});

export const { loadCards, addToDeck, removeFromDeck } = cardsSlice.actions;
export default cardsSlice.reducer;

export const loadCardsAsync = () => async (dispatch) => {
  const cardsArray = await Cards.fetchAllCards();
  dispatch(loadCards(cardsArray));
};

export const selectCards = (state) => state.cards.cards;
export const selectLastPage = (state) => state.cards.lastPage;
