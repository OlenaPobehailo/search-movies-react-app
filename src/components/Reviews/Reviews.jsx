import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import { useHttpRequest } from 'hooks/useHttpRequest';
import { fetchReviews } from 'services/api';
import { Author, Content, StyledList } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, { isLoading, error }] = useHttpRequest(fetchReviews, movieId);

  if (!reviews||isLoading) {
    return <Loader/>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }


  if (!isLoading &&(!reviews || reviews.length === 0)) {
    return <h2>No reviews available.</h2>;
  }

    return (
    <StyledList>
      {reviews &&
        reviews.map(item => (
          <li key={item.id}>
            <Author>{`Author: ${item.author}`}</Author>
            <Content>{item.content}</Content>
          </li>
        ))}
    </StyledList>
  );
};

export default Reviews;