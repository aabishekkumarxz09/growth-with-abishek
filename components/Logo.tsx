import React from 'react';

interface LogoProps {
  iconOnly?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ iconOnly = false, className = "" }) => {
  return (
    <div className={`flex items-center gap-2 group ${className}`} role="img" aria-label="Growth With Abishek Logo">
      <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      </div>
      {!iconOnly && (
        <span className="text-xl font-bold tracking-tight text-slate-50">
          Growth With <span className="text-indigo-400">Abishek</span>
        </span>
      )}
    </div>
  );
};

export default Logo;