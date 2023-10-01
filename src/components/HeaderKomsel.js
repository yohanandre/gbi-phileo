import React from 'react';
import './HeaderKomsel.css'; // Ubah nama file CSS
import headerImage from '../assets/img/header.png';

function HeaderTentangKami() {
  return (
    <header className="HeaderKomsel" style={{ backgroundImage: `url(${headerImage})` }}>
      <div className="header-content-komsel">
        <h1 className="welcome-komsel">PHILEO FAMILY CENTER</h1>
        <p className="p-title-komsel">KOMSEL</p>
      </div>
    </header>
  );
}

export default HeaderTentangKami;
