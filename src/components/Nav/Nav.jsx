import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/2">About</NavLink>
    </nav>
  );
}
