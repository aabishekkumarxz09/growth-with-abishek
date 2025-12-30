
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Metrics from './components/Metrics';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import LinkedInSection from './components/LinkedInSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Header />
      <main>
        <Hero />
        <Partners />
        <Metrics />
        <Services />
        <About />
        <Contact />
        <LinkedInSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
