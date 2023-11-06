import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMenuWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fefefe;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 12px 20px;
  color: black;

  font-size: 24px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &.active {
    color: goldenrod;
  }

  &:hover {
    color: goldenrod;
    text-decoration: underline;
  }
`;
