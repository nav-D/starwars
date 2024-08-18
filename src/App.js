import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Loader from './components/Loader.js';
import Header from './components/Header.js';

const Home = lazy(() => import('./pages/home.js'));
const Characters = lazy(() => import('./pages/characters.js'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </Suspense>
    </Router >
  );
}

export default App;
