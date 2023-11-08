import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 20px 0;
  padding: 0;

  li {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    margin: 10px;
  }
`;

export const Author = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const Content = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.4;
  text-align: left;
`;
