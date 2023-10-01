import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './VisiMisi.css';

function VisiMisi() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const visiMisiSection = document.querySelector('.visi-misi-section');
      if (visiMisiSection) {
        const rect = visiMisiSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Check initial visibility
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={`visi-misi-section ${isVisible ? 'visible' : ''}`}>
      <Container>
        <h2 className="section-title">VISI DAN MISI</h2>
        <Row>
          <Col md={6}>
            <div className="visi">
              <h3>Visi</h3>
              <p>
                Membangun keluarga kesaksian yang bertumbuh maksimal bagi kerajaan Allah.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="misi">
              <h3>Misi</h3>
              <ul>
                <li>Menjadikan Yesus sebagai penguasa tunggal kehidupan.</li>
                <li>Disiplin saat teduh.</li>
                <li>Bersekutu dengan saudara seiman.</li>
                <li>Melayani dengan kasih.</li>
                <li>Taat pada amanat agung.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default VisiMisi;
