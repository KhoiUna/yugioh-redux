import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cards from "../utils/Cards";

//Async thunk
export const loadCardsAsync = createAsyncThunk(
  "cards/loadCards",
  async (limit) => {
    let { cardsArray, totalCardLength } = await Cards.fetchAllCards(limit);
    cardsArray = cardsArray.map((i) => ({
      id: i.id,
      cardName: i.name,
      cardImage: i.card_images[0].image_url,
      added: false,
    }));

    return { cardsArray, totalCardLength };
  }
);

export const searchCardsAsync = createAsyncThunk(
  "cards/searchCards",
  async ({ cardName, limit }) => {
    let { cardsArray, totalCardLength } = await Cards.fetchCardsByName(
      cardName,
      limit
    );
    cardsArray = cardsArray?.map((i) => ({
      id: i.id,
      cardName: i.name,
      cardImage: i.card_images[0].image_url,
      added: false,
    }));

    return { cardsArray, totalCardLength };
  }
);

//Slice
export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    lastPage: null,
    deckNum: 0,
    deck: [],
    isLoadingCards: false,
    failedToLoadCards: false,
  },
  reducers: {
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
  extraReducers: {
    [loadCardsAsync.pending]: (state, action) => {
      state.isLoadingCards = true;
      state.failedToLoadCards = false;
    },
    [loadCardsAsync.fulfilled]: (state, action) => {
      const { cardsArray, totalCardLength } = action.payload;
      const addedCardIds = state.deck.map((i) => i.id);
      state.cards = cardsArray.map((i) => {
        i.added = addedCardIds.includes(i.id);
        return i;
      });

      state.lastPage = Math.floor(totalCardLength / 20) + 1;

      state.isLoadingCards = false;
      state.failedToLoadCards = false;
    },
    [loadCardsAsync.rejected]: (state, action) => {
      state.isLoadingCards = false;
      state.failedToLoadCards = true;
    },
    //Search cards
    [searchCardsAsync.pending]: (state, action) => {
      state.isLoadingCards = true;
      state.failedToLoadCards = false;
    },
    [searchCardsAsync.fulfilled]: (state, action) => {
      const { cardsArray, totalCardLength } = action.payload;
      const addedCardIds = state.deck.map((i) => i.id);
      state.cards = cardsArray?.map((i) => {
        i.added = addedCardIds.includes(i.id);
        return i;
      });

      state.lastPage = Math.floor(totalCardLength / 20) + 1;

      state.isLoadingCards = false;
      state.failedToLoadCards = false;
    },
    [searchCardsAsync.rejected]: (state, action) => {
      state.isLoadingCards = false;
      state.failedToLoadCards = true;
    },
  },
});

export const { addToDeck, removeFromDeck } = cardsSlice.actions;
export default cardsSlice.reducer;

//Selectors
export const selectCards = (state) => state.cards.cards;
export const selectLastPage = (state) => state.cards.lastPage;
export const selectDeckNum = (state) => state.cards.deckNum;
export const selectDeck = (state) => state.cards.deck;
export const isLoadingCards = (state) => state.cards.isLoadingCards;
