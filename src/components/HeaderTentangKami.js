import React from 'react';
import './HeaderTentangKami.css';
import headerImage from '../assets/img/header.png';

function HeaderTentangKami() {
  return (
    <header className="site-header-tentangkami" style={{ backgroundImage: `url(${headerImage})` }}>
      <div className="header-content-tentangkami">
        <h1 className="welcome-tentangkami">PHILEO FAMILY CENTER</h1>
        <p className="p-title-tentangkami">TENTANG KAMI</p>
      </div>
    </header>
  );
}

export default HeaderTentangKami;
