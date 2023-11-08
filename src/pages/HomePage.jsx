import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MovieList from 'components/MovieList';
import Loader from 'components/Loader';
import { fetchTrendingMovies } from 'redux/operations';
import { selectError, selectLoading, selectTrendingMovies } from 'redux/selectors';

const HomePage = () => {
  const trendingMovies = useSelector(selectTrendingMovies);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, [dispatch]);

  console.log(trendingMovies);
  console.log(isLoading);
  return (
    <div className="container">
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      {trendingMovies && <MovieList movies={trendingMovies} />}
    </div>
  );
};

export default HomePage;
