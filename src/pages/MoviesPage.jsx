import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader';
import MovieList from 'components/MovieList';
import SearchForm from 'components/SearchForm';
import { useHttpRequest } from 'hooks/useHttpRequest';
import { fetchMoviesByQuery } from 'services/api';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    searchStr: '',
  });
  const searchQuery = searchParams.get('searchStr');

  const [searchMovies, { isLoading, error }] = useHttpRequest(
    fetchMoviesByQuery,
    searchQuery
  );

  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = searchStr => {
    setSearchParams({ searchStr });
    setSearchPerformed(true);
  };

  return (
    <div className="container">
      <SearchForm onSubmit={handleSearch}/>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}

      {searchPerformed &&
      !isLoading &&
      searchMovies &&
      searchMovies.length === 0 ? (
        <h1>No movies found</h1>
      ) : (
        searchMovies && <MovieList movies={searchMovies} />
      )}
    </div>
  );
};

export default MoviesPage;