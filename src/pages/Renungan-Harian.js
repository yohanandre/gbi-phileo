import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeaderRenungan from '../components/HeaderRenungan';
import Renungan from '../components/Renungan';

function RenunganHarian() {
  return (
    <div className="TentangKami">
      <Navbar />
      <HeaderRenungan />
      <Renungan />
      <Footer />
    </div>
  );
}

export default RenunganHarian;
