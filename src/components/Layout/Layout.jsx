import { Outlet } from 'react-router-dom';
import { StyledMenuWrapper, StyledNavLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <StyledMenuWrapper>
        <ul>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="movies">Movies</StyledNavLink>
          </li>
        </ul>
      </StyledMenuWrapper>
      <Outlet />
    </>
  );
};

export default Layout;
