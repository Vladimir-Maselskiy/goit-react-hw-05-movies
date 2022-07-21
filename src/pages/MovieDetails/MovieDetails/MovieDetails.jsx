import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import * as API from 'utils/fetchThemoviedb';
import MovieCard from '../MovieCard/MovieCard';
import { StyledMovie, Button } from './MovieDetails.styled';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [savedLocation, setSavedLocation] = useState(null);

  useEffect(() => {
    API.fetchMovieByID(movieID)
      .then(setMovie)
      .catch(err => {
        navigate('/');
        console.log(err);
      });
  }, [movieID, navigate]);

  useEffect(() => {
    if (location.state) {
      setSavedLocation(location.state.from);
    }
  }, [location]);

  const onClick = () => {
    if (!savedLocation) {
      navigate('/');
      return;
    }
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
