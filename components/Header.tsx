
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollState = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScrollState);
    return () => window.removeEventListener('scroll', handleScrollState);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Update URL hash without jumping
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 py-3 shadow-2xl shadow-indigo-500/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container px-6 mx-auto max-w-7xl">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          <a 
            href="#home" 
            className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1" 
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden space-x-10 md:flex">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium transition-all text-slate-300 hover:text-indigo-400 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex px-6 py-3 text-sm font-bold text-white transition-all bg-indigo-600 rounded-full hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/40 active:scale-95 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-slate-950"
            >
              Get Free Growth Audit
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            type="button"
            className="p-2 md:hidden text-slate-300 hover:text-white transition-colors focus:outline-none z-50"
            onClick={toggleMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col items-center justify-center ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto translate-y-0' 
            : 'opacity-0 pointer-events-none -translate-y-10'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col w-full px-8 space-y-8 text-center">
          {NAV_ITEMS.map((item, index) => (
            <a 
              key={item.label}
              href={item.href}
              className={`text-3xl font-bold text-slate-100 hover:text-indigo-400 transition-all transform ${
                isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <div className={`pt-8 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <a 
              href="#contact"
              className="inline-block w-full py-5 text-xl font-extrabold text-white bg-indigo-600 rounded-2xl shadow-2xl shadow-indigo-600/20 active:scale-95"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Get Free Growth Audit
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
