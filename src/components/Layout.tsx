import React from 'react';
import { Header } from './Header';
import { BottomNav } from './BottomNav';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen pb-24 selection:bg-blue-200">
      <Header />
      <main className="max-w-md mx-auto w-full">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};
