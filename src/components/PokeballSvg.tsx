import React from 'react';

export default function PokeballSvg({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="48" fill="#EE1515" stroke="#222" strokeWidth="4" />
      <rect x="2" y="48" width="96" height="4" fill="#222" />
      <circle cx="50" cy="50" r="48" fill="white" clipPath="inset(50% 0 0 0)" stroke="#222" strokeWidth="4" />
      <path d="M 2 50 L 98 50" stroke="#222" strokeWidth="4" />
      <circle cx="50" cy="50" r="14" fill="white" stroke="#222" strokeWidth="4" />
      <circle cx="50" cy="50" r="7" fill="#222" />
      <circle cx="50" cy="50" r="4" fill="white" />
    </svg>
  );
}
