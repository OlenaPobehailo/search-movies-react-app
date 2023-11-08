import React from 'react';
import { basePosterUrl } from 'services/api';
import { Additional, Info, StyledWrapper } from './Details.styled';
import { Link, Outlet } from 'react-router-dom';
import calculateUserScore from 'helpers/calculateUserScore ';
import { calculateYear } from 'helpers/calculateYear';

const Details = ({ movie }) => {
  const { title, overview, genres, poster_path, release_date, vote_average, vote_count } = movie;

  const posterPath = poster_path ? basePosterUrl + poster_path : null;
  const genreList = genres ? genres.map(genre => genre.name).join(', ') : null;
  // const year = new Date(release_date).getFullYear();

  console.log(movie);
  return (
    <>
      <StyledWrapper>
        <img src={posterPath || 'https://placehold.co/350x500?text=Not+available'} alt={title} />

        <Info>
          <h2>
            {title || 'Title is not available'}
            {` (${calculateYear(release_date)})`}
          </h2>
          <p>User score: {calculateUserScore(vote_average, vote_count)} %</p>
          <h3>Overview</h3>
          <p>{overview ? overview : 'no information available'}</p>
          <h3>Genres</h3>
          <p>{genreList ? genreList : 'no information available'}</p>
        </Info>
      </StyledWrapper>
      <Additional>
        <p>Additional information:</p>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </Additional>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Details;
