import React from 'react';
import './AgendaBulanan.css';
import FamilyDayImage from '../assets/img/FamilyDay.png';
import BaptisSeptemberImage from '../assets/img/BaptisSeptember.png';

function AgendaBulanan() {
  return (
    <section className="agenda-bulanan-section">
      <h2 className="agenda-title">AGENDA SEPTEMBER</h2>
      <div className="poster-wrapper">
        <div className="poster">
          <h3 className="poster-title">FAMILY DAY</h3>
          <img src={FamilyDayImage} alt="Family Day" />
          <p className="poster-description">
            Bergabunglah bersama seluruh jemaat GBI Phileo untuk merayakan HUT GBI Phileo yang ke-31 di Anjungan Sulawesi Utara, TMII, Jakarta Timur. KUOTA TERBATAS.
          </p>
          <button className="daftar-button">DAFTAR</button>
        </div>
        <div className="poster">
          <h3 className="poster-title">BAPTISAN SELAM</h3>
          <img src={BaptisSeptemberImage} alt="Baptis Selam September" />
          <p className="poster-description">
            Bagi Saudara/i yang belum menerima baptisan dan berkenan untuk dibaptis bulan ini, kami membuka kembali Baptisan Selam yang diadakan tanggal 30 September di GBI Phileo.
          </p>
          <button className="daftar-button">DAFTAR</button>
        </div>
      </div>
    </section>
  );
}

export default AgendaBulanan;
