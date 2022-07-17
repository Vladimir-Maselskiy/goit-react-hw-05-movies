import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as API from 'utils/fetchThemoviedb';
import { StyledNavLink } from './Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    API.fetchDayPopularMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <h3>Trening today</h3>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <StyledNavLink
              to={`/goit-react-hw-05-movies/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title || movie.original_name}
            </StyledNavLink>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
}
