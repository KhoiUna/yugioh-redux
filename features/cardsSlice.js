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
      const { cardsArray, totalCardLength } = action.payload;
      const addedCardIds = state.deck.map((i) => i.id);
      state.cards = cardsArray.map((i) => {
        i.added = addedCardIds.includes(i.id);
        return i;
      });
      state.displayCards = state.cards;

      state.lastPage = Math.floor(totalCardLength / 20) + 1;
    },
    searchCards: (state, action) => {
      const { cardsArray, totalCardLength } = action.payload;
      const addedCardIds = state.deck.map((i) => i.id);
      state.cards = cardsArray?.map((i) => {
        i.added = addedCardIds.includes(i.id);
        return i;
      });

      state.lastPage = Math.floor(totalCardLength / 20) + 1;
    },
    addToDeck: (state, action) => {
      const card = action.payload;
      state.cards.filter((i) => i.id === card.id).map((i) => (i.added = true));

      state.deck.push(card);
      state.deckNum++;
    },
    removeFromDeck: (state, action) => {
      const cardId = action.payload;
      state.cards.filter((i) => i.id === cardId).map((i) => (i.added = false));

      state.deck = state.deck.filter((i) => i.id !== cardId);
      state.deckNum--;
    },
  },
});

export const {
  loadCards,
  searchCards,
  addToDeck,
  removeFromDeck,
} = cardsSlice.actions;
export default cardsSlice.reducer;

export const loadCardsAsync = (limit) => async (dispatch) => {
  let { cardsArray, totalCardLength } = await Cards.fetchAllCards(limit);
  cardsArray = cardsArray.map((i) => ({
    id: i.id,
    cardName: i.name,
    cardImage: i.card_images[0].image_url,
    added: false,
  }));
  dispatch(loadCards({ cardsArray, totalCardLength }));
};

export const searchCardsAsync = (cardName) => async (dispatch) => {
  let { cardsArray, totalCardLength } = await Cards.fetchCardsByName(cardName);
  cardsArray = cardsArray?.map((i) => ({
    id: i.id,
    cardName: i.name,
    cardImage: i.card_images[0].image_url,
    added: false,
  }));
  dispatch(searchCards({ cardsArray, totalCardLength }));
};

export const selectCards = (state) => state.cards.cards;
export const selectLastPage = (state) => state.cards.lastPage;
export const selectDeckNum = (state) => state.cards.deckNum;
export const selectDeck = (state) => state.cards.deck;
