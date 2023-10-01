import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import AgendaBulanan from '../components/AgendaBulanan';
import Greetings from '../components/Greetings';
import SundayServices from '../components/SundayServices';
import LUP from '../components/LUP';
import Winning from '../components/WorshipInTheMorning';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <Greetings />      
      <SundayServices />
      <LUP />
      <Winning />
      <Footer/>
    </div>
  );
}

export default Home;
