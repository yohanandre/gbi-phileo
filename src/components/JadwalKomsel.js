import React from 'react';
import './JadwalKomsel.css';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import komsel1 from '../assets/img/Komsel1.png';
import komsel2 from '../assets/img/Komsel2.png';
import komsel3 from '../assets/img/Komsel3.png';
import komsel4 from '../assets/img/Komsel4.png';
import komsel5 from '../assets/img/Komsel5.png';

function JadwalKomsel() {
  return (
    <div className="jadwal-komsel">
      <Carousel
        touch={true}
        prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}
        nextIcon={<FontAwesomeIcon icon={faChevronRight} />}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={komsel1} alt="Ibadah Komsel 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={komsel2} alt="Ibadah Komsel 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={komsel3} alt="Ibadah Komsel 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={komsel4} alt="Ibadah Komsel 4" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={komsel5} alt="Ibadah Komsel 5" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default JadwalKomsel;
