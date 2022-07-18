import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'utils/fetchThemoviedb';
import { StyledList, StyledListItem, StyledIMG } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState(null);

  const { movieID } = useParams();

  useEffect(() => {
    API.fetchCast(movieID).then(data => {
      setCast(data.cast.slice(0, 5));
    });
  }, [movieID]);

  return (
    <div>
      <StyledList>
        {cast &&
          cast.map(cast => (
            <StyledListItem key={cast.id}>
              <StyledIMG
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt={cast.name}
              />
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </StyledListItem>
          ))}
      </StyledList>
    </div>
  );
}
