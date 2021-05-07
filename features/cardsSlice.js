import { createSlice } from "@reduxjs/toolkit";
import Cards from "../utils/Cards";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    lastPage: null,
    deckNum: 0,
    deck: [],
  },
  reducers: {
    loadCards: (state, action) => {
      state.cards = action.payload;
      state.lastPage = Math.floor(action.payload.length / 20) + 1;
    },
    addToDeck: (state, action) => {
      const card = action.payload;
      state.cards
        .filter((i) => i.id === card.cardId)
        .map((i) => (i.added = true));

      state.deck.push(card);
      state.deckNum++;
    },
    removeFromDeck: (state, action) => {
      const cardId = action.payload;
      state.cards.filter((i) => i.id === cardId).map((i) => (i.added = false));

      state.deck = state.deck.filter((i) => i.cardId !== cardId);
      state.deckNum--;
    },
  },
});

export const { loadCards, addToDeck, removeFromDeck } = cardsSlice.actions;
export default cardsSlice.reducer;

export const loadCardsAsync = () => async (dispatch) => {
  let cardsArray = await Cards.fetchAllCards();
  cardsArray = cardsArray.map((i) => ({
    id: i.id,
    cardName: i.name,
    cardImage: i.card_images[0].image_url,
    added: false,
  }));
  dispatch(loadCards(cardsArray));
};

export const selectCards = (state) => state.cards.cards;
export const selectLastPage = (state) => state.cards.lastPage;
export const selectDeckNum = (state) => state.cards.deckNum;
export const selectDeck = (state) => state.cards.deck;
