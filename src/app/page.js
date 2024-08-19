import React from 'react';
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import Image from 'next/image';
import AboutSection from './components/AboutSection';
import ExploreSection from './components/ExploreSection';
import Footer from './components/Footer';

export default function Home() {

  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExploreSection />



      <Footer />



    </main>
  );
}
