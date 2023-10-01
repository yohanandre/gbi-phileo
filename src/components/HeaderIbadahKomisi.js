import React from 'react';
import './HeaderIbadahKomisi.css';
import headerImage from '../assets/img/header.png';

function HeaderIbadahKomisi() {
  return (
    <header className="HeaderIbadahKomisi" style={{ backgroundImage: `url(${headerImage})` }}>
      <div className="header-content-ibadah-komisi">
        <h1 className="welcome-ibadah-komisi">PHILEO FAMILY CENTER</h1>
        <p className="p-title-ibadah-komisi">IBADAH KOMISI</p>
      </div>
    </header>
  );
}

export default HeaderIbadahKomisi;
