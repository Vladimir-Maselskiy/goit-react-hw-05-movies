import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  &:visited,
  &:link {
    color: blue;
  }
`;

export const StyledForm = styled.form`
  margin: 10px;
`;
