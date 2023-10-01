// OurPastor.js
import React from 'react';
import './OurPastor.css';
import pastorImage from '../assets/img/pastorfamily.png';

function OurPastor() {
  return (
    <section className="our-pastor-section">
      <div className="pastor-container">
        <div className="pastor-image">
          <img src={pastorImage} alt="Pastor" />
        </div>
        <div className="pastor-details">
          <div className="pastor-content">
            <h2 className="pastor-title">Gembala Kami</h2>
            <p className="pastor-bio">
              Pastor Philips Kristianto lahir pada XX September 1965. Ia menempuh pendidikan di Sekolah Tinggi Teologi Bethel Indonesia.
              <br /><br />
              Beliau adalah suami dari Pastor Lola Kartika dan telah dikaruniai dua anak, yaitu Abigail Gracia Kristianto dan Kenneth Kaleb Kristianto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPastor;
