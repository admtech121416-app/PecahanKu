import React from 'react';
import { cn } from '../lib/mathUtils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        'glass-card p-6 relative overflow-hidden',
        onClick ? 'cursor-pointer hover:shadow-md transition-shadow active:scale-[0.98]' : '',
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-glass-bg to-transparent pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
