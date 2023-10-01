import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.png';

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const navigateToHome = () => {
    window.location.href = '/';
  };

  const navigateToTentangKami = () => {
    window.location.href = '/tentang-kami';
  };

  const navigateToRenunganHarian = () => {
    window.location.href = '/renungan-harian';
  };

  const navigateToKomsel = () => {
    window.location.href = '/komsel';
  };

  const navigateToIbadahKomisi = () => {
    window.location.href = '/ibadah-komisi';
  };

  const navigateToDukunganDoa = () => {
    window.location.href = '/dukungan-doa';
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      expanded={expanded}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-link logo-link" onClick={navigateToHome}>
        <img src={logo} alt="My Church Logo" className="logo-image" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <div className="navbar-link" onClick={navigateToTentangKami}>
            TENTANG KAMI
          </div>
          <div className="navbar-link" onClick={navigateToRenunganHarian}>
            RENUNGAN HARIAN
          </div>
          <div className="navbar-link" onClick={navigateToKomsel}>
            KOMSEL
          </div>
          <div className="navbar-link" onClick={navigateToIbadahKomisi}>
            IBADAH KOMISI
          </div>
          <div className="navbar-link" onClick={navigateToDukunganDoa}>
            DUKUNGAN DOA
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
