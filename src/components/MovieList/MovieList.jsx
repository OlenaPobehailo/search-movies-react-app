import { Link, useLocation } from "react-router-dom";
import { basePosterUrl } from "services/api";
import MovieCard from "components/MovieCard";
import { StyledList } from "./MovieList.styled";

const MovieList = ({ movies }) => {
  console.log(basePosterUrl);
  const location = useLocation();
  // console.log(location);
  return (
    <StyledList>
      {movies &&
        movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <MovieCard movie={movie} />
            </Link>
          </li>
        ))}
    </StyledList>
  );
};

export default MovieList;
