import React from 'react';
import './DeskripsiKomsel.css';

function DeskripsiKomsel() {
  const scheduleData = [
    {
      namaCabang: 'Gading Serpong',
      tanggal: 'Senin, 2 Oktober 2023',
      waktu: '19.00 WIB',
    },
    {
      namaCabang: 'Mutiara Pluit',
      tanggal: 'Senin, 2 Oktober 2023',
      waktu: '19.00 WIB',
    },
    {
      namaCabang: 'Sangiang',
      tanggal: 'Senin, 2 Oktober 2023',
      waktu: '19.00 WIB',
    },
    {
      namaCabang: 'Villa Tangerang Indah',
      tanggal: 'Senin, 2 Oktober 2023',
      waktu: '19.00 WIB',
    },
    {
      namaCabang: 'Wisma',
      tanggal: 'Senin, 2 Oktober 2023',
      waktu: '19.00 WIB',
    },
    {
        namaCabang: 'Kotabumi',
        tanggal: 'Senin, 2 Oktober 2023',
        waktu: '19.00 WIB',
      },
  ];

  return (
    <div className="deskripsi-komsel">
      <div className="judul">
        <h1>JADWAL KOMSEL GBI PHILEO</h1>
        <h2>OKTOBER 2023</h2>
      </div>
      <div className="deskripsi-items-container">
        {scheduleData.map((item, index) => (
          <div className="deskripsi-item" key={index}>
            <div className="info">
              <p>{item.namaCabang}</p>
              <p>{item.tanggal}</p>
              <p>{item.waktu}</p>
              <button>Info Selengkapnya</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeskripsiKomsel;
