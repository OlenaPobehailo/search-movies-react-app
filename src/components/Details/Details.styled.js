import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  

  img {
    width: 350px;
    height: auto;
  }
`;

export const Info = styled.div`
  padding: 1.5rem;

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
