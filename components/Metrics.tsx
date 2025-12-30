
import React from 'react';
import { METRICS } from '../constants';
import Counter from './Counter';

const Metrics: React.FC = () => {
  return (
    <section id="results" className="py-32 bg-slate-950">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {METRICS.map((metric, idx) => (
            <div 
              key={idx} 
              className="p-12 text-center glass-card rounded-[3rem] group transition-all duration-500 hover:border-indigo-500/40"
            >
              <div className="mb-4 text-6xl font-extrabold text-white md:text-7xl tracking-tighter">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-sm font-black tracking-[0.3em] uppercase text-slate-500 group-hover:text-indigo-400 transition-colors duration-500">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
