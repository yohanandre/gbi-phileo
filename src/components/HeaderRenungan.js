// HeaderRenungan.js

import React from 'react';
import './HeaderRenungan.css'; // Nama file CSS diubah menjadi HeaderRenungan.css
import headerImage from '../assets/img/header.png';

function HeaderRenungan() {
  return (
    <header className="HeaderRenungan" style={{ backgroundImage: `url(${headerImage})` }}>
      <div className="header-content-renungan">
        <h1 className="welcome-renungan">PHILEO FAMILY CENTER</h1>
        <p className="p-title-renungan">RENUNGAN HARIAN</p>
      </div>
    </header>
  );
}

export default HeaderRenungan;
