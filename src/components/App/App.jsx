import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Container } from './App.styled';
import Nav from '../Nav/Nav';
import Cast from 'components/pages/SingleMovie/Cast/Cast';
import Reviews from 'components/pages/SingleMovie/Reviews/Reviews';
const Home = lazy(() => import('components/pages/Home/Home'));
const Movies = lazy(() => import('components/pages/Movies/Movies'));
const SingleMovie = lazy(() =>
  import('components/pages/SingleMovie/SingleMovie/SingleMovie')
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
            element={<SingleMovie />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
