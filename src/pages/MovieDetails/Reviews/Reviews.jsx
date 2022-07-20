import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'utils/fetchThemoviedb';
// import { StyledList, StyledListItem, StyledIMG } from './Cast.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [isReviewsLoading, setIsReviewsLoading] = useState(false);

  const { movieID } = useParams();

  useEffect(() => {
    API.fetchReviews(movieID)
      .then(data => {
        setReviews(data.results);
        if (data.results.length > 0) {
          setIsReviewsLoading(true);
        }
      })
      .catch(err => console.log(err));
  }, [movieID]);

  return (
    <div>
      <ul>
        {isReviewsLoading ? (
          reviews.map(review => (
            <li key={review.author}>
              <p>Author: {review.author}</p>
              <p>Content: {review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
}
