import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';

import Details from 'components/Details';
import Loader from 'components/Loader';
import { fetchMovieById } from 'redux/operations';
import { selectError, selectLoading, selectSingleMovie } from 'redux/selectors';

const DetailsPage = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const location = useLocation();
  console.log(location);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // console.log(location);
  const backRef = useRef(location.state?.from || '/');
  const movie = useSelector(selectSingleMovie);

  useEffect(() => {
    if (movieId && (!movie || movie.id !== +movieId)) {
      dispatch(fetchMovieById(movieId));
    }
  }, [dispatch, movie, movieId]);

  console.log(movie);

  return (
    <div className="container">
      <Link to={backRef.current}>Back</Link>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      {movie && !isLoading && (
        <div>
          <Details movie={movie} />
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
