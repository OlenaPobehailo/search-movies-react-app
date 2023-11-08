export const selectTrendingMovies = state => state.movies.trendingMovies;

export const selectSingleMovie = state => state.movies.singleMovie;

export const selectLoading = state => state.movies.isLoading;
export const selectError = state => state.movies.error;
