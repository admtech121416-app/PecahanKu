import React from 'react';
import { AppProvider } from './context/AppContext';
import { Layout } from './components/Layout';
import { Splash } from './pages/Splash';
import { Feed } from './pages/Feed';
import { Explore } from './pages/Explore';
import { Challenge } from './pages/Challenge';
import { Profile } from './pages/Profile';
import { Achievements } from './pages/Achievements';
import { Lesson } from './pages/Lesson';
import { useAppContext } from './context/AppContext';

const AppContent = () => {
  const { currentPage } = useAppContext();

  return (
    <Layout>
      {currentPage === 'splash' && <Splash />}
      {currentPage === 'feed' && <Feed />}
      {currentPage === 'explore' && <Explore />}
      {currentPage === 'challenge' && <Challenge />}
      {currentPage === 'profile' && <Profile />}
      {currentPage === 'achievements' && <Achievements />}
      {currentPage === 'lesson' && <Lesson />}
    </Layout>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
