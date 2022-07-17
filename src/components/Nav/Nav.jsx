import { StyledNavLink, StyledNav } from './Nav.styled';

export default function Nav() {
  return (
    <StyledNav>
      <StyledNavLink to="/goit-react-hw-05-movies/">Home</StyledNavLink>
      <StyledNavLink to="/goit-react-hw-05-movies/movies">About</StyledNavLink>
    </StyledNav>
  );
}
