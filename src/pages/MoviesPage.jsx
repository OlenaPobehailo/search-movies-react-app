import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Loader';
import MovieList from 'components/MovieList';
import SearchForm from 'components/SearchForm';

import { fetchMoviesByQuery } from 'redux/operations';
import { selectSearchError, selectSearchLoading, selectSearchResults } from 'redux/selectors';

const MoviesPage = () => {
  const dispatch = useDispatch();

  const [searchPerformed, setSearchPerformed] = useState(false);

  const searchMovies = useSelector(selectSearchResults);
  const isLoading = useSelector(selectSearchLoading);
  const error = useSelector(selectSearchError);

  // console.log(searchMovies);

  const handleSearch = searchStr => {
    dispatch(fetchMoviesByQuery(searchStr));
    setSearchPerformed(true);
  };

  return (
    <div className="container">
      <SearchForm onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}

      {searchPerformed && !isLoading && searchMovies && searchMovies.length === 0 ? (
        <h1>No movies found</h1>
      ) : (
        searchMovies && <MovieList movies={searchMovies} />
      )}
    </div>
  );
};

export default MoviesPage;
