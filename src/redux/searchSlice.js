import { createSlice } from '@reduxjs/toolkit';
import { fetchMoviesByQuery } from './operations';

const initialState = {
  searchResults: [],
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMoviesByQuery.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMoviesByQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.searchResults = action.payload;
      })
      .addCase(fetchMoviesByQuery.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default searchSlice.reducer;
