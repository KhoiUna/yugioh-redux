import { configureStore } from "@reduxjs/toolkit";
import deckReducer from "../features/deckSlice";

export default configureStore({
  reducer: {
    deck: deckReducer,
  },
});
