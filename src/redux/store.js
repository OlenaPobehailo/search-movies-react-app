import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';
import searchReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    search: searchReducer,
  },
});
