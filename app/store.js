import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import cardReducer from "../features/cardsSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      cards: cardReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
