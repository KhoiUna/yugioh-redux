import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import deckReducer from "../features/deckSlice";
import cardReducer from "../features/cardsSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      deck: deckReducer,
      cards: cardReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
