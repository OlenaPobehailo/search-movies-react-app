export const selectTrendingMovies = state => state.movies.trendingMovies;
export const selectSingleMovie = state => state.movies.singleMovie;
export const selectLoading = state => state.movies.isLoading;
export const selectError = state => state.movies.error;

export const selectSearchResults = state => state.search.searchResults;
export const selectSearchLoading = state => state.search.isLoading;
export const selectSearchError = state => state.search.error;
