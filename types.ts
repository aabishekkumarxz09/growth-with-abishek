
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface MetricItem {
  label: string;
  value: number;
  suffix: string;
}