import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledList } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <StyledList>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
    </StyledList>
  );
};

export default MovieList;
