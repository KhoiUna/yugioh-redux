import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import deckReducer from "../features/deckSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      deck: deckReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
