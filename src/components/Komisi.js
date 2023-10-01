import React from 'react';
import './Komisi.css';
import JesusKidsImg from '../assets/img/JesusKids.png';
import GGImg from '../assets/img/GG.png';
import PhimencyImg from '../assets/img/Phimency.png';
import WBIImg from '../assets/img/WBI.png';

function Komisi() {
  return (
    <div className="komisi-page">
      <h1 className="komisi-title">IBADAH KOMISI GBI PHILEO</h1>

      {/* Komisi Jesus Kids */}
      <div className="komisi-item komisi-item-left">
        <div className="komisi-image-left">
          <img src={JesusKidsImg} alt="Jesus Kids" className="komisi-image" />
        </div>
        <div className="komisi-content-right">
          <h2 className="komisi-subtitle komisi-subtitle-left">Jesus Kids | Minggu ke 1 & 4</h2>
          <p className="komisi-description komisi-description-left">
            Lorem ipsum singkat untuk kebaktian Jesus Kids. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* Komisi Godly Generation */}
      <div className="komisi-item komisi-item-right">
        <div className="komisi-content-left">
          <h2 className="komisi-subtitle komisi-subtitle-right">GG | Minggu ke 2 & 3</h2>
          <p className="komisi-description komisi-description-right">
            Lorem ipsum singkat untuk kebaktian Godly Generation. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        <div className="komisi-image-right">
          <img src={GGImg} alt="Godly Generation" className="komisi-image" />
        </div>
      </div>

      {/* Komisi Phimency */}
      <div className="komisi-item komisi-item-left">
        <div className="komisi-image-left">
          <img src={PhimencyImg} alt="Phimency" className="komisi-image" />
        </div>
        <div className="komisi-content-right">
          <h2 className="komisi-subtitle komisi-subtitle-left">Phimency | Jumat</h2>
          <p className="komisi-description komisi-description-left">
            Lorem ipsum singkat untuk kebaktian Phimency. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      {/* Komisi WBI */}
      <div className="komisi-item komisi-item-right">
        <div className="komisi-content-left">
          <h2 className="komisi-subtitle komisi-subtitle-right">WBI | Sabtu</h2>
          <p className="komisi-description komisi-description-right">
            Lorem ipsum singkat untuk kebaktian WBI. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="komisi-image-right">
          <img src={WBIImg} alt="WBI" className="komisi-image" />
        </div>
      </div>
    </div>
  );
}

export default Komisi;
