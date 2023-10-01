import React from 'react';
import './LUP.css';
import LUPImage from '../assets/img/LUP.png';

function LUP() {
  return (
    <section className="lup-section">
      <div className="lup-image">
        <img src={LUPImage} alt="LUP" className="lup-img" />
      </div>
      <div className="lup-text">
        <h2 className="lup-title">LET US PRAY</h2>
        <p className="lup-description">
          Bergabunglah bersama kami secara online via Zoom, untuk beribadah memuji Tuhan dan mendengarkan Firman-Nya, setiap Selasa malam pukul 20.30 WIB.
        </p>
        <button className="join-button">BERGABUNG</button>
      </div>
    </section>
  );
}

export default LUP;
