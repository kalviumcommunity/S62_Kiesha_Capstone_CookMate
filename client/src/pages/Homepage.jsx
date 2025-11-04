import { useEffect } from 'react';
import Navbar from '../components/home/Navbar';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
// import HowItWorks from '../components/home/HowItWorks';

import CTA from '../components/home/CTA';
// import Footer from '../components/home/Footer';



export default function Homepage() {
  return (
    <div className="min-h-screen bg-white text-dark font-sans overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        {/* <HowItWorks /> */}
        <CTA />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
