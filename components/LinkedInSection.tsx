
import React from 'react';
import { Linkedin, ExternalLink } from 'lucide-react';

const LinkedInSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="p-10 border border-slate-800 bg-slate-950 rounded-[2rem] flex flex-col items-center text-center">
          <div className="p-4 mb-6 bg-blue-600/10 rounded-2xl">
            <Linkedin className="w-10 h-10 text-blue-500" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">Stay Ahead of the Curve</h3>
          <p className="max-w-xl mb-8 text-lg text-slate-400">
            Follow us on LinkedIn for performance marketing insights, real-world strategies, 
            and growth frameworks used to scale brands globally.
          </p>
          <a 
            href="https://linkedin.com/in/abishekgupta" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
          >
            View LinkedIn Profile
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LinkedInSection;
