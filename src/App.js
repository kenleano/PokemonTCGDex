// App.js
import React from 'react';
import './App.css';
import PokemonCards from './PokemonCards';
import PokemonCardDetail from './PokemonCardDetail';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PokemonCards />} />
        <Route path="/pokemon-card-detail/:cardId" element={<PokemonCardDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
