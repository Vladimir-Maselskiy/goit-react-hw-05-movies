import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import * as API from 'utils/fetchThemoviedb';
import { StyledNavLink, StyledForm } from './Movies.styled';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      API.fetchMoviesByQuery(query)
        .then(data => setMovies(data.results))
        .catch(err => console.log(err));
    }
  }, [query, navigate]);

  const onSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value;
    navigate(`?query=${query}`);
    e.target.reset();
  };

  return (
    <div>
      <StyledForm onSubmit={onSubmit}>
        <input name="query" />
        <button type="submit">Search</button>
      </StyledForm>
      <ul>
        {query &&
          movies.map(movie => (
            <li key={movie.id}>
              <StyledNavLink
                to={`/movies/${movie.id}`}
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
