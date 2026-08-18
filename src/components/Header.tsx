import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Flame, Star, Moon, Sun, BookOpen } from 'lucide-react';

export const Header = () => {
  const { userState, currentPage, theme, setTheme } = useAppContext();

  if (currentPage === 'splash') return null;

  return (
    <header className="sticky top-0 z-40 w-full px-4 pt-4 pb-2 bg-gradient-to-b from-glass-bg to-transparent backdrop-blur-sm">
      <div className="max-w-md mx-auto flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
            PecahanKu
          </h1>
          <div className="flex space-x-2">
            <div className="glass-button px-3 py-1 flex items-center space-x-1">
              <Flame size={16} className={userState.streak > 0 ? "text-orange-500" : "text-text-muted"} />
              <span className="font-bold text-sm text-text-main">{userState.streak}</span>
            </div>
            <div className="glass-button px-3 py-1 flex items-center space-x-1">
              <Star size={16} className="text-yellow-500" />
              <span className="font-bold text-sm text-text-main">{userState.xp} XP</span>
            </div>
          </div>
        </div>
        
        {/* Theme Toggle */}
        <div className="flex justify-end space-x-1">
          <button 
            onClick={() => setTheme('light')} 
            className={`p-2 rounded-full transition-all ${theme === 'light' ? 'bg-glass-hover text-blue-500 shadow-sm' : 'text-text-muted hover:bg-glass-bg'}`}
            title="Mode Terang"
          >
            <Sun size={16} />
          </button>
          <button 
            onClick={() => setTheme('dark')} 
            className={`p-2 rounded-full transition-all ${theme === 'dark' ? 'bg-glass-hover text-indigo-400 shadow-sm' : 'text-text-muted hover:bg-glass-bg'}`}
            title="Mode Malam"
          >
            <Moon size={16} />
          </button>
          <button 
            onClick={() => setTheme('reading')} 
            className={`p-2 rounded-full transition-all ${theme === 'reading' ? 'bg-glass-hover text-orange-500 shadow-sm' : 'text-text-muted hover:bg-glass-bg'}`}
            title="Mode Baca"
          >
            <BookOpen size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};
