import React from 'react';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}