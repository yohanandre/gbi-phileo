import React from 'react';
import './CeritaKami.css';
import OurTeamImage from '../assets/img/OurTeam.png'; // Import the image

function CeritaKami() {
  return (
    <div className="cerita-kami" style={{ backgroundImage: `url(${OurTeamImage})` }}>
      <div className="overlay"></div>
      <div className="cerita-content">
        <h2 className="title">OUR STORY</h2>
        <p className="text">
          Phileo adalah bagian dari denominasi Gereja Bethel Indonesia yang dibangun pada tanggal 22 September 1992 di Perumahan Villa Tangerang, Tangerang, Banten oleh gembala kami Ps. Philips Kristianto. <br></br>
          Saat ini, gereja kami berlokasi di Jalan Bunga Raya Blok BE2 No 10, RT.005/RW.025, Gebang Raya, Kec. Periuk, Kota Tangerang, Banten. <br></br><br></br>
          Kami juga memiliki cabang gereja yang sedang berkembang di daerah Gading Serpong, lebih tepatnya di Cafe Lugano lt.3 yang beralamat di Jl. BSD Raya Utama, Medang, Kec. Pagedangan, Kabupaten Tangerang, Banten.
        </p>
      </div>
    </div>
  );
}

export default CeritaKami;
