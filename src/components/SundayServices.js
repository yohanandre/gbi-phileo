import React from 'react';
import './SundayServices.css';
import church1 from '../assets/img/church1.png';
import church2 from '../assets/img/church2.png';

function SundayServices() {
  const service1Style = {
    backgroundImage: `url(${church1})`
  };

  const service2Style = {
    backgroundImage: `url(${church2})`
  };

  const mapLink1 = 'https://goo.gl/maps/B4UVd1GD6YEHuhUD8';
  const mapLink2 = 'https://goo.gl/maps/gB6BE8Dya4dBBjAZ6';

  return (
    <section className="sunday-services-section">
      <h2 className="service-title">OUR SUNDAY SERVICES</h2>
      <div className="services-wrapper">
        <div className="service-wrapper">
          <div className="time-text">
            <div>GBI PHILEO TANGERANG</div>
            07.00 WIB
          </div>
          <a href={mapLink1} target="_blank" rel="noopener noreferrer" className="service-image" style={service1Style}>
            <div className="service-text">
              <h3>Buka di Google Maps</h3>
            </div>
          </a>
        </div>
        <div className="service-wrapper">
          <div className="time-text">
            <div>GBI PHILEO GADING SERPONG</div>
            14.00 WIB
          </div>
          <a href={mapLink2} target="_blank" rel="noopener noreferrer" className="service-image" style={service2Style}>
            <div className="service-text">
              <h3>Buka di Google Maps</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SundayServices;
