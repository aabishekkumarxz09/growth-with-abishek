
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const points = [
    {
      title: "Data-Driven Marketing",
      desc: "Every campaign pivot is backed by multi-channel attribution models and cold data to ensure maximum ROAS."
    },
    {
      title: "Conversion-First Framework",
      desc: "We prioritize bottom-line growth over vanity metrics. ROI is the primary focus of our digital strategy."
    },
    {
      title: "Scalable Growth Infrastructure",
      desc: "Our systems are built to sustain 8-figure scaling, providing the technical SEO and ad infrastructure needed for rapid growth."
    }
  ];

  return (
    <section id="about" className="py-32 bg-slate-900/20 scroll-mt-20">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-24 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="mb-12 text-4xl font-bold leading-[1.1] text-white md:text-6xl tracking-tight">
              A Data-Driven <br />
              <span className="text-indigo-500">Digital Marketing Agency.</span>
            </h2>
            <div className="space-y-12">
              {points.map((point, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-2.5 rounded-full bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                      <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors tracking-tight">{point.title}</h3>
                    <p className="text-lg text-slate-400 leading-relaxed font-light">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="p-12 rounded-[3.5rem] glass-card border-indigo-500/10 md:p-16 relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-600/10 blur-[120px] group-hover:bg-indigo-600/20 transition-all duration-700"></div>
              
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
                <span className="text-xs font-black tracking-[0.25em] uppercase text-indigo-400">The Agency Mission</span>
              </div>
              
              <p className="mb-10 text-2xl leading-relaxed text-slate-100 font-medium tracking-tight">
                We bridge the gap between high-level creative vision and rigorous technical SEO and ad performance.
              </p>
              
              <p className="text-lg text-slate-400 leading-relaxed mb-8 font-light">
                Our mission is to empower ambitious brands with the strategies and execution 
                needed to dominate their categories through superior performance marketing and web development.
              </p>
              
              <p className="text-lg text-slate-400 leading-relaxed font-light">
                We operate as an extension of your growth team, obsessing over conversion rates and Shopify optimization 
                so you can focus on building world-class products.
              </p>
            </div>
            
            {/* Visual elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600/20 blur-[100px] -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
