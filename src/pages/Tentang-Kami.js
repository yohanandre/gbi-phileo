import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeaderTentangKami from '../components/HeaderTentangKami';
import CeritaKami from '../components/CeritaKami';
import VisiMisi from '../components/VisiMisi';
import OurPastor from '../components/OurPastor';
import OfficeHours from '../components/OfficeHours';

function TentangKami() {
  return (
    <div className="TentangKami">
      <Navbar />
      <HeaderTentangKami />
      <CeritaKami />
      <VisiMisi />
      <OurPastor />
      <OfficeHours />
      <Footer />
    </div>
  );
}

export default TentangKami;
