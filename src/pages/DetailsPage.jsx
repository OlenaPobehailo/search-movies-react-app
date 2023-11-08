import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';

import Details from 'components/Details';
import Loader from 'components/Loader';
import { fetchMovieById } from 'redux/operations';
import { selectError, selectLoading, selectSingleMovie } from 'redux/selectors';

const DetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // console.log(location);
  const backRef = useRef(location.state?.from || '/');
  const movie = useSelector(selectSingleMovie);
  console.log(movie);

  if (!movie) {
    dispatch(fetchMovieById(movieId));
  }

  return (
    <div className="container">
      <Link to={backRef.current}>Back</Link>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      {movie && (
        <div>
          <Details movie={movie} />
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
