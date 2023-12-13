import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../slices/postsSlice";

const store = configureStore({
  reducer: postsReducer
});

export default store;

