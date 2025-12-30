
import React from 'react';
import Logo from './Logo';
import { Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/abishekgupta',
      icon: <Linkedin className="w-5 h-5" />,
      label: 'Visit Abishek Gupta on LinkedIn'
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/growthwithabish?s=21',
      icon: <Twitter className="w-5 h-5" />,
      label: 'Follow Growth with Abishek on X'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/growthwithabishek?igsh=b3NvYjY2eGkzaWxk',
      icon: <Instagram className="w-5 h-5" />,
      label: 'Follow Growth with Abishek on Instagram'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@Growthwithabishek',
      icon: <Youtube className="w-5 h-5" />,
      label: 'Subscribe to Growth with Abishek on YouTube'
    }
  ];

  return (
    <footer className="pt-20 pb-10 bg-slate-950 border-t border-slate-900">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Logo />
            <p className="text-slate-400 leading-relaxed">
              Performance marketing agency specialized in data-driven scaling for modern e-commerce and B2B brands.
            </p>
          </div>
          
          <div>
            <h4 className="mb-6 font-bold text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Services', 'Results', 'Partners', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-indigo-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Services</h4>
            <ul className="space-y-4">
              {['Meta Ads', 'Google Ads', 'SEO Services', 'Web Development', 'Shopify'].map((service) => (
                <li key={service}>
                  <span className="text-slate-400">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Connect</h4>
            <div className="flex flex-wrap gap-4 mb-8">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 transition-all rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-indigo-600 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-slate-500 italic">
              Empowering brands globally.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Growth With Abishek. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
