import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeaderDukunganDoa from '../components/HeaderDukunganDoa';
import FormDoa from '../components/FormDoa';

function DukunganDoa() {
  return (
    <div className="DukunganDoa">
      <Navbar />
      <HeaderDukunganDoa />
      <FormDoa />
      <Footer />
    </div>
  );
}

export default DukunganDoa;
