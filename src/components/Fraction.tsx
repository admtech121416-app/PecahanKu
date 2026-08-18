import React from 'react';
import { cn } from '../lib/mathUtils';

interface FractionProps {
  n: number | string;
  d: number | string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Fraction: React.FC<FractionProps> = ({ n, d, className, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-4xl'
  };

  return (
    <div className={cn("inline-flex flex-col items-center justify-center font-bold mx-1 align-middle", sizeClasses[size], className)}>
      <span className="leading-none">{n}</span>
      <span className="w-full h-[2px] bg-current my-[2px] rounded-full"></span>
      <span className="leading-none">{d}</span>
    </div>
  );
};
