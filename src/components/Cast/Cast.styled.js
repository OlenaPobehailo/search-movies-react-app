import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 20px 0;

  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    display: flex;
    border: 1px solid lightgray;
  }

  img {
    max-width: 350px;
    height: auto;
  }

  div {
  }
`;
export const Wrapper = styled.div`
  padding: 20px;
`;

export const Actor = styled.p`
  font-size: 24px;
  font-weight:500;
  line-height: 2;
`;

export const Character = styled.p`
  font-size: 24px;
  line-height: 2;
`;
