import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;

  img {
    flex: 1;
    max-width: 100%;
    height: auto;
    margin-right: 20px;
    object-fit: contain;
    object-position: top;
  }
`;

export const Info = styled.div`
  flex: 2;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 2.5rem;
    font-size: 2.5rem;
  }

  h3 {
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

export const Additional = styled.div`
  p {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  a {
    color: goldenrod;
    font-size: 1.2rem;
    margin-right: 15px;
  }

  a:hover {
    text-decoration: underline;
  }
`;
