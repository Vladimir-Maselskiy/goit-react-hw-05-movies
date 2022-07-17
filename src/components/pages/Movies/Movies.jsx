import { useEffect } from 'react';
import { useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=834c76b3089fde7a8eb63b29983db356&query=${query}`
    )
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      });
  }, [query, navigate]);

  const onSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value;
    navigate(`?query=${query}`);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="query" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {query &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`} state={{ from: location }}>
                {movie.title || movie.original_name}
              </Link>{' '}
            </li>
          ))}
      </ul>
    </div>
  );
}
