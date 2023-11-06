import Loader from 'components/Loader';
import MovieList from 'components/MovieList';
import { useHttpRequest } from 'hooks/useHttpRequest';
import { trendingMoviesUrl } from 'services/api';

const HomePage = () => {
  const [trendingMovies, { isLoading, error }] = useHttpRequest(trendingMoviesUrl);

  return (
    <div className="container">
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      {trendingMovies && <MovieList movies={trendingMovies} />}
    </div>
  );
};

export default HomePage;