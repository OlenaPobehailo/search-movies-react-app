import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 0;
  margin: 0;

  li {
    flex: 0 0 calc(25% - 10px);
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  img {
    max-width: 350px;
    height: auto;
  }

  div {
  }
`;

export const Wrapper = styled.div`
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
  margin: 10px;
  border-radius: 4px;
`;

export const Actor = styled.p`
  font-weight: bold;
`;

export const Character = styled.p`
  font-style: italic;
`;
