
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section id="home" className="relative pt-40 pb-24 overflow-hidden md:pt-56 md:pb-40 min-h-screen flex items-center">
      {/* Refined Background Orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 blur-[160px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-600/10 blur-[160px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-60"></div>

      <div className="container relative px-6 mx-auto max-w-7xl">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 mb-10 text-[11px] font-black tracking-[0.25em] uppercase border rounded-full text-indigo-400 border-indigo-500/20 bg-indigo-500/5 animate-pulse">
            Scaling Brands to 8 Figures & Beyond
          </div>
          
          <h1 className="mb-8 font-extrabold tracking-tight text-slate-50 leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
            Performance Marketing Agency <br />
            <span className="text-indigo-500 inline-block mt-2">Built for Growth.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto mb-14 text-lg md:text-xl text-slate-400 leading-relaxed font-light">
            We build precision-engineered performance systems that scale revenue, 
            optimize ROI, and turn digital presence into conversion powerhouses.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="group flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white transition-all bg-indigo-600 rounded-full hover:bg-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/30 active:scale-95 w-full sm:w-auto"
            >
              Get Free Growth Audit
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" aria-hidden="true" />
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleScrollTo(e, 'services')}
              className="px-10 py-5 text-lg font-bold transition-all border rounded-full text-slate-300 border-slate-800 hover:bg-white/5 hover:text-white hover:border-slate-600 active:scale-95 w-full sm:w-auto"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
