import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchMovieById, fetchTrendingMovies } from './operations';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    trendingMovies: [],
    searchMovies: [],
    singleMovie: null,
    cast: [],
    reviews: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.trendingMovies = action.payload;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.singleMovie = action.payload;
      })
      .addMatcher(
        isAnyOf(fetchTrendingMovies.pending, fetchMovieById.pending),
        (state, { payload }) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchTrendingMovies.rejected, fetchMovieById.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export default movieSlice.reducer;
