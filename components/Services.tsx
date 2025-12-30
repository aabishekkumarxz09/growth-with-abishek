
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-slate-950 scroll-mt-20">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] uppercase border border-indigo-500/30 text-indigo-400 rounded-full bg-indigo-500/5">
            Our Performance Capabilities
          </div>
          <h2 className="mb-8 text-4xl font-bold text-white md:text-6xl tracking-tight">
            Our Performance Marketing <br className="hidden md:block" /> & <span className="text-indigo-500">SEO Services</span>
          </h2>
          <p className="max-w-2xl text-lg text-slate-400 font-light leading-relaxed">
            A specialized stack of digital growth tools engineered to maximize ROI and dominate your market segment with precision Google Ads and Meta Ads management.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <article 
              key={service.id} 
              className="group flex flex-col p-10 transition-all duration-500 glass-card rounded-[2.5rem] border border-slate-900 hover:border-indigo-500/30 hover:bg-slate-900/60 hover:-translate-y-2"
            >
              <div className="mb-8 p-4 w-fit rounded-2xl bg-slate-900/80 border border-slate-800/50 shadow-inner group-hover:bg-indigo-600/10 group-hover:border-indigo-500/20 transition-all duration-500">
                <div className="transition-transform duration-500 group-hover:scale-110" aria-hidden="true">
                  {service.icon}
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors tracking-tight">{service.title}</h3>
              <p className="text-base leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-light">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
