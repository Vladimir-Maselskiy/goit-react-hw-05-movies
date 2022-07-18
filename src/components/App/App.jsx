import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Container } from './App.styled';
import Nav from '../Nav/Nav';
import Cast from 'components/pages/MovieDetails/Cast/Cast';
import Reviews from 'components/pages/MovieDetails/Reviews/Reviews';
const Home = lazy(() => import('components/pages/Home/Home'));
const Movies = lazy(() => import('components/pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('components/pages/MovieDetails/MovieDetails/MovieDetails')
);

export const App = () => {
  return (
    <Container>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/goit-react-hw-05-movies/" element={<Home />} />
          <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieID"
            element={<MovieDetails />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
