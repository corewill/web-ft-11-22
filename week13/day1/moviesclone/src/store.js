import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducer/movieSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});