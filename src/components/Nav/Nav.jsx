import { StyledNavLink, StyledNav } from './Nav.styled';

export default function Nav() {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">About</StyledNavLink>
    </StyledNav>
  );
}
