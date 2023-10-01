import React from 'react';
import './HeaderDukunganDoa.css'; // Ubah nama file CSS
import headerImage from '../assets/img/header.png';

function HeaderDukunganDoa() {
  return (
    <header className="HeaderDukunganDoa" style={{ backgroundImage: `url(${headerImage})` }}>
      <div className="header-content-dua">
        <h1 className="welcome-dua">PHILEO FAMILY CENTER</h1>
        <p className="p-title-dua">DUKUNGAN DOA</p>
      </div>
    </header>
  );
}

export default HeaderDukunganDoa;
