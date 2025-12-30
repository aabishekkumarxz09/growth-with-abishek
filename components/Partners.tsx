
import React, { useEffect, useRef, useState } from 'react';

const Partners: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const partnerItems = [
    "Google Partner",
    "Meta Business Partner",
    "Shopify Partner"
  ];

  return (
    <section 
      id="partners" 
      ref={sectionRef}
      className="py-16 bg-slate-950/50 border-y border-slate-900/50"
    >
      <div className="container px-6 mx-auto max-w-7xl">
        <h2 className="mb-10 text-[9px] font-black tracking-[0.5em] text-center uppercase text-slate-600">
          Official Platform Partnerships
        </h2>
        
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 md:gap-24 lg:gap-32 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {partnerItems.map((partner, index) => (
            <div 
              key={index}
              className="text-xs md:text-[13px] font-medium tracking-[0.25em] uppercase text-slate-400 text-center whitespace-nowrap"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
