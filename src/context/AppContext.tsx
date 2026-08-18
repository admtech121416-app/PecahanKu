import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserState, Topic } from '../types';

export type Theme = 'light' | 'dark' | 'reading';

interface AppContextType {
  userState: UserState;
  addXp: (amount: number) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  markTopicTried: (topic: Topic) => void;
  addBadge: (badge: string) => void;
  recordAnswer: (correct: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  currentLesson: string | null;
  setCurrentLesson: (lesson: string | null) => void;
}

const defaultState: UserState = {
  xp: 0,
  streak: 0,
  maxStreak: 0,
  answeredCorrectly: 0,
  totalAnswered: 0,
  topicsTried: {
    'Perkalian Pecahan': false,
    'Pembagian Pecahan': false,
    'Pecahan ke Desimal': false,
    'Desimal ke Pecahan': false,
    'Membandingkan Desimal': false,
    'Mengurutkan Desimal': false,
    'Campuran': false,
  },
  badges: [],
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [userState, setUserState] = useState<UserState>(defaultState);
  const [currentPage, setCurrentPage] = useState('splash');
  const [theme, setTheme] = useState<Theme>('light');
  const [currentLesson, setCurrentLesson] = useState<string | null>(null);

  React.useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const addXp = (amount: number) => {
    setUserState(prev => ({ ...prev, xp: prev.xp + amount }));
  };

  const incrementStreak = () => {
    setUserState(prev => {
      const newStreak = prev.streak + 1;
      return {
        ...prev,
        streak: newStreak,
        maxStreak: Math.max(prev.maxStreak, newStreak),
      };
    });
  };

  const resetStreak = () => {
    setUserState(prev => ({ ...prev, streak: 0 }));
  };

  const markTopicTried = (topic: Topic) => {
    setUserState(prev => ({
      ...prev,
      topicsTried: { ...prev.topicsTried, [topic]: true }
    }));
  };

  const addBadge = (badge: string) => {
    setUserState(prev => {
      if (prev.badges.includes(badge)) return prev;
      return { ...prev, badges: [...prev.badges, badge] };
    });
  };

  const recordAnswer = (correct: boolean) => {
    setUserState(prev => ({
      ...prev,
      totalAnswered: prev.totalAnswered + 1,
      answeredCorrectly: prev.answeredCorrectly + (correct ? 1 : 0)
    }));
    if (correct) {
      incrementStreak();
      addXp(10);
    } else {
      resetStreak();
    }
  };

  return (
    <AppContext.Provider value={{
      userState,
      addXp,
      incrementStreak,
      resetStreak,
      markTopicTried,
      addBadge,
      recordAnswer,
      currentPage,
      setCurrentPage,
      theme,
      setTheme,
      currentLesson,
      setCurrentLesson
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
