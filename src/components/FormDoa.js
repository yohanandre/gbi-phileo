// FormDoa.js

import React, { useState } from 'react';
import './FormDoa.css';

function FormDoa() {
  const [formData, setFormData] = useState({
    nama: '',
    umur: '',
    alamat: '',
    nomorTelepon: '',
    PerihalYangInginDiDoakan: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1 className="title-outside-container">FORM DUKUNGAN DOA</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nama:</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Umur:</label>
            <input
              type="text"
              name="umur"
              value={formData.umur}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Alamat:</label>
            <input
              type="text"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Nomor Telepon:</label>
            <input
              type="tel"
              name="nomorTelepon"
              value={formData.nomorTelepon}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Perihal Yang Ingin Didoakan:</label>
            <textarea
              name="PerihalYangInginDiDoakan"
              value={formData.PerihalYangInginDiDoakan}
              onChange={handleChange}
              className="input-field PerihalYangInginDiDoakan-input"
            />
          </div>
          <button type="submit" className="submit-button">
            KIRIM
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormDoa;
