import React from 'react';
import './OfficeHours.css';

function OfficeHours() {
  return (
    <div className="office-hours">
      <div className="office-hours-title">
        <h2>OFFICE HOURS</h2>
      </div>
      <div className="office-hours-content">
        <p>
          <span role="img" aria-label="calendar icon">📅</span> SELASA - SABTU: 10.00 WIB - 16.00 WIB
        </p>
        <p>
          <span role="img" aria-label="phone icon">☎️</span> 1234567890
        </p>
        <p>
          <span role="img" aria-label="person icon">👤</span> Ps. Matius Morlan Siahaan
        </p>
      </div>
    </div>
  );
}

export default OfficeHours;
