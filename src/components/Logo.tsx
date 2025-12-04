import React from 'react';

export const LogoIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="6"
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M30 80 C 20 70, 20 40, 50 20 C 80 40, 80 70, 70 80" className="text-nourish-900"/>
    <path d="M30 80 L 30 90" className="text-nourish-900"/>
    <path d="M50 20 Q 80 20 85 50 Q 80 80 50 55 Q 30 40 50 20" className="text-nourish-500" fill="currentColor" fillOpacity="0.2"/>
    <path d="M50 55 Q 65 45 85 50" className="text-nourish-600"/>
  </svg>
);

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => {
  return (
    <div className="flex items-center gap-2">
      <LogoIcon className={className} />
      <span className="font-bold text-xl tracking-tight text-gray-900">
        Nourish<span className="text-nourish-600">AI</span>
      </span>
    </div>
  );
};