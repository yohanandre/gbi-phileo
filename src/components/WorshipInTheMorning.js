import React from 'react';
import './Winning.css';

function Winning() {
  return (
    <section className="winning-section">
      <div className="winning-content">
        <div className="winning-text">
          <div className="winning-title">Mulailah Pagimu dengan Kemenangan</div>
          <p className="winning-paragraph">
            Bersama Winning (Worship In The Morning) Bergabunglah bersama kami untuk bersaat teduh, memulai hari dengan firman Tuhan dan pujian setiap jam 05.00 Pagi
            di hari Senin, Rabu, dan Jumat.
          </p>
        </div>
        <div className="winning-video">
          <iframe
            title="Phileo Gospel Channel - Renungan Pagi"
            src="https://www.youtube.com/embed/Eoc2sAL3bmk"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Winning;
