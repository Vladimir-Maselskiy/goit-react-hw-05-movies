import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Container } from './App.styled';
import Nav from '../Nav/Nav';
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('pages/MovieDetails/MovieDetails/MovieDetails')
);
const Reviews = lazy(() => import('pages/MovieDetails/Reviews/Reviews'));
const Cast = lazy(() => import('pages/MovieDetails/Cast/Cast'));

export const App = () => {
  return (
    <Container>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieID" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
