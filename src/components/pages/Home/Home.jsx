import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=834c76b3089fde7a8eb63b29983db356'
    )
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <h3>Trening today</h3>
      <ul>
        {movies.map(movie => (
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
