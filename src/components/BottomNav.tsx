import React from 'react';
import { Home, Compass, Gamepad2, Trophy, User } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { cn } from '../lib/mathUtils';

export const BottomNav = () => {
  const { currentPage, setCurrentPage } = useAppContext();

  const navItems = [
    { id: 'feed', icon: Home, label: 'Beranda' },
    { id: 'explore', icon: Compass, label: 'Jelajah' },
    { id: 'challenge', icon: Gamepad2, label: 'Tantangan' },
    { id: 'achievements', icon: Trophy, label: 'Prestasi' },
    { id: 'profile', icon: User, label: 'Saya' },
  ];

  if (currentPage === 'splash') return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 px-4 pb-4 pt-2 bg-gradient-to-t from-glass-bg to-transparent backdrop-blur-sm">
      <div className="glass-card !rounded-2xl flex justify-between items-center px-6 py-3 max-w-md mx-auto shadow-lg border-glass-border">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={cn(
                "flex flex-col items-center justify-center transition-all duration-300 relative",
                isActive ? "text-blue-600 scale-110" : "text-text-muted hover:text-text-muted"
              )}
            >
              {isActive && (
                <span className="absolute -top-1 w-1 h-1 bg-blue-600 rounded-full animate-bounce" />
              )}
              <Icon size={isActive ? 24 : 22} strokeWidth={isActive ? 2.5 : 2} />
              <span className={cn(
                "text-[10px] mt-1 font-bold",
                isActive ? "text-blue-600" : "text-text-muted font-medium"
              )}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
