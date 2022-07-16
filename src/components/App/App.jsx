import { Routes, Route } from 'react-router-dom';
import { Container } from './App.styled';
import Nav from '../Nav/Nav';
import Home from 'components/pages/Home/Home';
import SingleMovie from 'components/pages/SingleMovie/SingleMovie';
import Cast from 'components/pages/SingleMovie/Cast/Cast';
import Reviews from 'components/pages/SingleMovie/Reviews/Reviews';

export const App = () => {
  return (
    <Container>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2" element={<h2>Route2</h2>} />
        <Route path="/movie/:movieID" element={<SingleMovie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Container>
  );
};
