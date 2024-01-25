import styled from "styled-components";

export const StyledCommonWrapper = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 480px) {
    width: 480px;
    /* padding: 0 47px; */
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    /* padding: 0 85px; */
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `;
