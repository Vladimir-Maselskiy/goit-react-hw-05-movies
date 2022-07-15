import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
      <Routes>
        <Route path="/" element={<div>Route1</div>} />
        <Route path="/" element={<div>Route2</div>} />
        {/* <Route path="/about" element={<Movies />} /> */}
      </Routes>
    </div>
  );
};
