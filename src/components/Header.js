import React from 'react';
import './Header.css';
import headerImage from '../assets/img/header.png';

function Header() {
  return (
    <header className="site-header" style={{ backgroundImage: `url(${headerImage})` }}>
      <div className="header-content">
        <h1 className="welcome">WELCOME HOME</h1>
        <p className="p-title">PHILEO FAMILY CENTER</p>
        <button className="schedule-button">JADWAL KEBAKTIAN</button>
      </div>
    </header>
  );
}

export default Header;
