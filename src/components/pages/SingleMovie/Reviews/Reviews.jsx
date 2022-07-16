import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { StyledList, StyledListItem, StyledIMG } from './Cast.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [isReviewsLoading, setIsReviewsLoading] = useState(false);

  const { movieID } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=834c76b3089fde7a8eb63b29983db356&page=1`
    )
      .then(res => res.json())
      .then(data => {
        setReviews(data.results);
        if (data.results.length > 0) {
          setIsReviewsLoading(true);
        }

        console.log(data);
      });
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
