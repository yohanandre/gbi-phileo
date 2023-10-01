import React from 'react';
import './Greetings.css';
import psPhilipImage from '../assets/img/psphilip.png';

function Greetings() {
  return (
    <section className="greetings-section">
      <div className="greetings-content">
        <div className="leader-image">
          <img src={psPhilipImage} alt="Ps. Philips Kristianto" />
        </div>
        <div className="leader-text">
          <p>
            "Dear friends, it is with great joy that we gather together to
            celebrate our faith and community. Let us continue to support and uplift
            one another on this beautiful journey of life."
          </p>
          <p>- Ps. Philips Kristianto</p>
        </div>
      </div>
    </section>
  );
}

export default Greetings;
