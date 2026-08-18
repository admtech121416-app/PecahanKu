import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Trophy, Star, Target, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Achievements = () => {
  const { userState } = useAppContext();

  // Mock list of possible badges
  const availableBadges = [
    { id: 'Rookie', title: '🌟 Pecahan Rookie', desc: 'Menyelesaikan 1 soal.' },
    { id: 'MasterPerkalian', title: '✖️ Master Perkalian', desc: 'Jago di perkalian pecahan.' },
    { id: 'JagoMembagi', title: '➗ Jago Membagi', desc: 'Tidak bingung membalik pecahan.' },
    { id: 'DesimalTransformer', title: '🔄 Decimal Transformer', desc: 'Lancar mengubah pecahan.' },
    { id: 'DesimalDetective', title: '⚖️ Decimal Detective', desc: 'Teliti membandingkan angka.' },
    { id: 'MathStreak', title: '🔥 Math Streak', desc: 'Benar 3 kali berturut-turut.' }
  ];

  return (
    <div className="p-4 space-y-6">
      <div className="text-center py-4">
        <h2 className="text-2xl font-extrabold text-text-main">🏆 Prestasi</h2>
        <p className="text-text-muted font-medium">Koleksi pencapaian selama sesi ini</p>
        <p className="text-xs text-text-muted mt-2">Pencapaian akan dimulai kembali jika halaman dimuat ulang.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {availableBadges.map((badge, index) => {
          // For mockup purposes, we'll light up some based on simple heuristics
          // In a real app we'd trigger these based on exact user state changes
          const isUnlocked = userState.totalAnswered >= 1 && badge.id === 'Rookie' 
                          || userState.maxStreak >= 3 && badge.id === 'MathStreak'
                          || userState.topicsTried['Perkalian Pecahan'] && badge.id === 'MasterPerkalian'
                          || userState.topicsTried['Pembagian Pecahan'] && badge.id === 'JagoMembagi'
                          || (userState.topicsTried['Membandingkan Desimal'] || userState.topicsTried['Mengurutkan Desimal']) && badge.id === 'DesimalDetective';

          return (
            <GlassCard key={badge.id} className={`p-4 flex flex-col items-center text-center transition-all ${isUnlocked ? 'bg-glass-hover' : 'bg-text-main/10/30 opacity-60'}`}>
              <div className={`text-4xl mb-2 ${isUnlocked ? '' : 'grayscale'}`}>
                {badge.title.split(' ')[0]}
              </div>
              <h3 className={`font-bold text-sm leading-tight mb-1 ${isUnlocked ? 'text-text-main' : 'text-text-muted'}`}>
                {badge.title.split(' ').slice(1).join(' ')}
              </h3>
              <p className="text-[10px] text-text-muted">{badge.desc}</p>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
};
