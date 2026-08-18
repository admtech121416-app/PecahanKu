import React from 'react';
import { useAppContext } from '../context/AppContext';
import { GlassCard } from '../components/GlassCard';
import { Trophy, Star, Target, CheckCircle2 } from 'lucide-react';

export const Profile = () => {
  const { userState } = useAppContext();

  const triedTopicsCount = Object.values(userState.topicsTried).filter(Boolean).length;

  return (
    <div className="p-4 space-y-6">
      <div className="text-center py-6">
        <div className="w-24 h-24 bg-gradient-to-tr from-blue-400 to-violet-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl shadow-xl shadow-blue-500/30">
          🧑‍🎓
        </div>
        <h2 className="text-2xl font-extrabold text-text-main">Perjalanan Matematikamu</h2>
        <p className="text-text-muted font-medium text-sm mt-2 max-w-xs mx-auto">
          Data aktivitas ini hanya berlangsung selama sesi belajar dan tidak disimpan.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <GlassCard className="p-4 flex flex-col items-center text-center">
          <Star className="text-yellow-500 mb-2" size={32} />
          <span className="text-2xl font-black text-text-main">{userState.xp}</span>
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Total XP</span>
        </GlassCard>
        <GlassCard className="p-4 flex flex-col items-center text-center">
          <Target className="text-orange-500 mb-2" size={32} />
          <span className="text-2xl font-black text-text-main">{userState.maxStreak}</span>
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Max Streak</span>
        </GlassCard>
        <GlassCard className="p-4 flex flex-col items-center text-center">
          <CheckCircle2 className="text-emerald-500 mb-2" size={32} />
          <span className="text-2xl font-black text-text-main">{userState.answeredCorrectly}/{userState.totalAnswered}</span>
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Soal Benar</span>
        </GlassCard>
        <GlassCard className="p-4 flex flex-col items-center text-center">
          <Trophy className="text-blue-500 mb-2" size={32} />
          <span className="text-2xl font-black text-text-main">{userState.badges.length}</span>
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Badge</span>
        </GlassCard>
      </div>

      <GlassCard className="p-6 mt-6">
        <h3 className="font-bold text-text-main mb-4">Topik yang sudah dicoba:</h3>
        <div className="space-y-3">
          {Object.entries(userState.topicsTried).map(([topic, tried]) => (
            <div key={topic} className="flex justify-between items-center">
              <span className={`font-medium ${tried ? 'text-text-main' : 'text-text-muted'}`}>{topic}</span>
              {tried ? <CheckCircle2 size={20} className="text-emerald-500" /> : <div className="w-5 h-5 rounded-full border-2 border-text-main/10" />}
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};
