import Details from 'components/Details';
import Loader from 'components/Loader';
import { useHttpRequest } from 'hooks/useHttpRequest';
import { useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';

const DetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  // console.log(location);
  const backRef = useRef(location.state?.from || '/');
  const [movie, { isLoading, error }] = useHttpRequest(fetchMovieById, movieId);

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
