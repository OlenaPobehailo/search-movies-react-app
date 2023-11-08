import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import { useHttpRequest } from 'hooks/useHttpRequest';
import { basePosterUrl, fetchCast } from 'services/api';
import { Actor, Character, StyledList, Wrapper } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, { isLoading, error }] = useHttpRequest(fetchCast, movieId);

  if (!cast || isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!isLoading && (!cast || cast.length === 0)) {
    return <h2>No cast information available.</h2>;
  }

  return (
    <StyledList>
      {cast &&
        cast.map(item => (
          <li key={item.id}>
            <img
              src={`${basePosterUrl}${item.profile_path}`}
              alt={item.name}
              onError={e => {
                e.target.src = 'https://placehold.co/300x450?text=Photo+not+available';
              }}
            />
            <Wrapper>
              <Actor>{item.name}</Actor>

              <Character>Character: {item.character}</Character>
            </Wrapper>
          </li>
        ))}
    </StyledList>
  );
};

export default Cast;
