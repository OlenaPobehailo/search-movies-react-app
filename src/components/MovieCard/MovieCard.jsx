import { MovieImage, MovieTitle, StyledCard } from "./MovieCard.styled";
import { basePosterUrl } from "services/api";

const MovieCard = ({movie}) => {
  return (
    <StyledCard>
      <MovieImage
        src={`${basePosterUrl}${movie.poster_path}`}
        alt={movie.title}
      />
      <MovieTitle>{movie.title}</MovieTitle>
    </StyledCard>
  );
};

export default MovieCard;
