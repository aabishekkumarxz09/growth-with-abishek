
import React from 'react';
import { 
  TrendingUp, 
  Target, 
  Search, 
  Code, 
  ShoppingBag, 
  BarChart3, 
  Zap, 
  Layout 
} from 'lucide-react';
import { NavItem, ServiceItem, MetricItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Partners', href: '#partners' },
  { label: 'Results', href: '#results' },
  { label: 'About Agency', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'meta-ads',
    title: 'Meta Ads Management',
    description: 'Scalable social advertising strategies focused on high ROAS and conversion optimization across FB & IG.',
    icon: <Target className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 'google-ads',
    title: 'Google Ads Management',
    description: 'Capture intent-driven traffic through Search, Display, and Performance Max campaigns that drive revenue.',
    icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
  },
  {
    id: 'seo',
    title: 'SEO Services',
    description: 'Comprehensive organic growth strategies spanning technical, on-page, and authority building.',
    icon: <Search className="w-8 h-8 text-indigo-500" />,
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'High-performance, conversion-centric web applications built with modern frameworks and clean code.',
    icon: <Code className="w-8 h-8 text-cyan-500" />,
  },
  {
    id: 'shopify',
    title: 'Shopify Optimization',
    description: 'End-to-end store design and speed optimization tailored for scaling e-commerce brands.',
    icon: <ShoppingBag className="w-8 h-8 text-green-500" />,
  },
  {
    id: 'cro',
    title: 'Conversion Rate (CRO)',
    description: 'A/B testing and data-driven UX improvements to squeeze more value from every visitor.',
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
  },
  {
    id: 'analytics',
    title: 'Analytics & Tracking',
    description: 'Precision measurement and attribution setup using GTM, GA4, and server-side tracking.',
    icon: <BarChart3 className="w-8 h-8 text-pink-500" />,
  },
  {
    id: 'landing-pages',
    title: 'Landing Page Design',
    description: 'Custom landing pages optimized for single-intent conversion and seamless ad campaign flow.',
    icon: <Layout className="w-8 h-8 text-orange-500" />,
  }
];

export const METRICS: MetricItem[] = [
  { label: 'Years Experience', value: 4, suffix: '+' },
  { label: 'Businesses Supported', value: 50, suffix: '+' },
  { label: 'Clients Served', value: 200, suffix: '+' },
];

export const PARTNER_LOGOS = {
  google: (
    <svg viewBox="0 0 160 48" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="6" height="48" fill="#4285F4"/>
      <g transform="translate(18, 4)">
        <path d="M12.4 20.8c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8c1.6 0 2.9.6 3.9 1.6l2.1-2.1c-1.6-1.5-3.6-2.4-6-2.4-5 0-9 4-9 9s4 9 9 9c2.4 0 4.5-.9 6.1-2.4l-2.1-2.1c-.9 1-2.3 1.6-4.1 1.6z" fill="#4285F4"/>
        <path d="M26.2 20.8c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8 5.8 2.6 5.8 5.8-2.6 5.8-5.8 5.8zm0-2.6c1.8 0 3.2-1.4 3.2-3.2s-1.4-3.2-3.2-3.2-3.2 1.4-3.2 3.2 1.4 3.2 3.2 3.2z" fill="#EA4335"/>
        <path d="M40.2 20.8c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8 5.8 2.6 5.8 5.8-2.6 5.8-5.8 5.8zm0-2.6c1.8 0 3.2-1.4 3.2-3.2s-1.4-3.2-3.2-3.2-3.2 1.4-3.2 3.2 1.4 3.2 3.2 3.2z" fill="#FBBC05"/>
        <path d="M54.2 20.8c-3.1 0-5.6-2.5-5.6-5.8s2.5-5.8 5.6-5.8c1.4 0 2.7.5 3.6 1.5l-2.1 2.1c-.4-.4-1-.7-1.5-.7-1.6 0-3 1.4-3 3s1.4 3 3 3c.8 0 1.4-.3 1.8-.7l2.1 2.1c-.9 1-2.2 1.5-3.9 1.5z" fill="#4285F4"/>
        <rect x="62" y="3.5" width="2.6" height="17.5" fill="#34A853"/>
        <path d="M72.2 20.8c-3.1 0-5.6-2.5-5.6-5.8s2.5-5.8 5.6-5.8c1.4 0 2.7.5 3.6 1.5l-2.1 2.1c-.4-.4-1-.7-1.5-.7-1.6 0-3 1.4-3 3s1.4 3 3 3c.8 0 1.4-.3 1.8-.7l2.1 2.1c-.9 1-2.2 1.5-3.9 1.5z" fill="#EA4335"/>
        <text x="0" y="40" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#94a3b8">Partner</text>
      </g>
    </svg>
  ),
  meta: (
    <svg viewBox="0 0 240 48" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 14C12 14 8 18 8 24S12 34 16 34C20 34 24 30 24 24S20 14 16 14ZM16 31C13.5 31 11.5 28.5 11.5 24S13.5 17 16 17S20.5 19.5 20.5 24S18.5 31 16 31Z" fill="#0668E1" transform="scale(1.2) translate(0, 4)"/>
      <path d="M36 24C36 18 32 14 28 14S20 18 20 24S24 34 28 34S36 30 36 24ZM28 31C25.5 31 23.5 28.5 23.5 24S25.5 17 28 17S32.5 19.5 32.5 24S30.5 31 28 31Z" fill="#0668E1" transform="scale(1.2) translate(0, 4)"/>
      <g transform="translate(64, 28)">
        <text fontFamily="Inter, sans-serif" fontSize="18" fontWeight="700" fill="white">Meta</text>
        <text x="52" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="400" fill="white">Business Partner</text>
      </g>
    </svg>
  ),
  shopify: (
    <svg viewBox="0 0 200 48" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8L4 10v28l18-4V6l-10 2z" fill="#95BF47"/>
      <path d="M12 8l10-2v28l-18 4V10l8-2z" fill="#5E8E3E"/>
      <circle cx="13" cy="16" r="3" fill="white" opacity="0.3"/>
      <g transform="translate(38, 30)">
        <text fontFamily="Inter, sans-serif" fontSize="22" fontWeight="700" fontStyle="italic" fill="white">shopify</text>
        <text x="82" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="400" fontStyle="italic" fill="white">partners</text>
      </g>
    </svg>
  ),
};
