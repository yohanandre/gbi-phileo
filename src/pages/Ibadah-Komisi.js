import React from 'react';
import Navbar from '../components/Navbar';
import HeaderIbadahKomisi from '../components/HeaderIbadahKomisi';
import Footer from '../components/Footer';
import Komisi from '../components/Komisi';

function IbadahKomisi() {
  return (
    <div>
      <Navbar />
      <HeaderIbadahKomisi />
      <Komisi />
      <Footer />
    </div>
  );
}

export default IbadahKomisi;
