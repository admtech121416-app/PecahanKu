import React from 'react';
import { motion } from 'motion/react';

interface PikoProps {
  expression?: 'happy' | 'thinking' | 'surprised' | 'normal';
  className?: string;
}

export const Piko: React.FC<PikoProps> = ({ expression = 'normal', className }) => {
  return (
    <motion.div 
      className={`relative w-24 h-24 ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
        {/* Body */}
        <rect x="20" y="20" width="60" height="60" rx="20" fill="#3b82f6" />
        <path d="M20 50 Q 50 80 80 50 L 80 80 Q 50 100 20 80 Z" fill="#2563eb" />
        
        {/* Antenna */}
        <line x1="50" y1="20" x2="50" y2="5" stroke="#3b82f6" strokeWidth="4" />
        <circle cx="50" cy="5" r="5" fill="#fef08a" />
        
        {/* Eyes based on expression */}
        {expression === 'happy' && (
          <g>
            <path d="M 30 40 Q 35 30 40 40" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M 60 40 Q 65 30 70 40" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
          </g>
        )}
        {expression === 'thinking' && (
          <g>
            <circle cx="35" cy="40" r="6" fill="white" />
            <circle cx="65" cy="35" r="6" fill="white" />
            <line x1="60" y1="25" x2="70" y2="25" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </g>
        )}
        {(expression === 'normal' || expression === 'surprised') && (
          <g>
            <circle cx="35" cy="40" r="6" fill="white" />
            <circle cx="65" cy="40" r="6" fill="white" />
          </g>
        )}
        
        {/* Mouth */}
        {expression === 'happy' && (
          <path d="M 35 55 Q 50 70 65 55" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
        )}
        {expression === 'normal' && (
          <path d="M 40 60 Q 50 65 60 60" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
        )}
        {expression === 'surprised' && (
          <circle cx="50" cy="65" r="5" fill="white" />
        )}
        {expression === 'thinking' && (
          <line x1="45" y1="60" x2="55" y2="60" stroke="white" strokeWidth="3" strokeLinecap="round" />
        )}
      </svg>
    </motion.div>
  );
};
