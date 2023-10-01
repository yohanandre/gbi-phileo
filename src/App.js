import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TentangKami from './pages/Tentang-Kami';
import Komsel from './pages/Komsel';
import IbadahKomisi from './pages/Ibadah-Komisi';
import DukunganDoa from './pages/Dukungan-Doa';
import RenunganHarian from './pages/Renungan-Harian';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/komsel" element={<Komsel />} /> 
          <Route path="/renungan-harian" element={<RenunganHarian />} />
          <Route path="/ibadah-komisi" element={<IbadahKomisi />} /> 
          <Route path="/dukungan-doa" element={<DukunganDoa /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
