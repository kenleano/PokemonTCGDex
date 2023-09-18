import React from 'react';
import './App.css';
import SearchCards from './SearchCards';
import PokemonCardDetail from './PokemonCardDetail';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './NavBar'; // Import the NavBar component

function App() {


  return (
    <Router>
      
      <Routes>
      <Route path="/search/" element={<SearchCards />} />
        <Route path="/search/:searchQuery" element={<SearchCards />} />
        <Route path="/pokemon-card-detail/:cardId" element={<PokemonCardDetail />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
