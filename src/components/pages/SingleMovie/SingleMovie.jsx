import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import MovieCard from './MovieCard/MovieCard';
import { StyledMovie, Button } from './SingleMovie.styled';

export default function SingleMovie() {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [savedLocation, setSavedLocation] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=834c76b3089fde7a8eb63b29983db356`
    )
      .then(res => res.json())
      .then(setMovie);
  }, [movieID]);

  useEffect(() => {
    if (location.state) {
      setSavedLocation(location.state.from);
    }
  }, [location]);

  const onClick = () => {
    navigate(savedLocation);
  };

  return (
    <StyledMovie>
      <Button onClick={onClick}>Go Back</Button>
      {movie && <MovieCard movie={movie} />}
      <Outlet />
    </StyledMovie>
  );
}
