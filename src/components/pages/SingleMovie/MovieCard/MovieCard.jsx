import { NavLink } from 'react-router-dom';
import { ImageBox, StyledImg, AditionalBox } from './MovieCard.styled';
export default function MovieCard(props) {
  const {
    movie: {
      poster_path: posterPath,
      original_title: originalTitle,
      vote_average: voteAverage,
      overview,
      genres,
      id,
    },
  } = props;

  return (
    <div>
      <ImageBox>
        <div>
          <StyledImg
            src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
            alt={originalTitle}
          />
        </div>
        <div style={{ padding: 20 }}>
          <h3>{originalTitle}</h3>
          <p>User Score: {voteAverage * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </ImageBox>
      <AditionalBox>
        <h3>Aditional information</h3>
        <NavLink to={`/movie/${id}/cast`}>Cast</NavLink>
        <NavLink to={`/movie/${id}/reviews`}>Reviews</NavLink>
      </AditionalBox>
    </div>
  );
}
