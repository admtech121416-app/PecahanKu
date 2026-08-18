import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { useAppContext } from '../context/AppContext';
import { BookOpen, Calculator, ArrowRightLeft, AlignLeft, Scale, ArrowDownUp } from 'lucide-react';
import { Topic } from '../types';

const topics: { id: Topic; icon: any; color: string; desc: string }[] = [
  { id: 'Perkalian Pecahan', icon: Calculator, color: 'text-blue-500 bg-blue-500/20', desc: 'Sebagian dari sebagian.' },
  { id: 'Pembagian Pecahan', icon: AlignLeft, color: 'text-pink-500 bg-pink-500/20', desc: 'Berapa kelompok yang bisa dibuat?' },
  { id: 'Pecahan ke Desimal', icon: ArrowRightLeft, color: 'text-amber-500 bg-amber-500/20', desc: 'Bentuk beda, nilai sama.' },
  { id: 'Desimal ke Pecahan', icon: ArrowRightLeft, color: 'text-emerald-500 bg-emerald-500/20', desc: 'Temukan pecahan di balik koma.' },
  { id: 'Membandingkan Desimal', icon: Scale, color: 'text-violet-500 bg-violet-500/20', desc: 'Siapa yang lebih besar?' },
  { id: 'Mengurutkan Desimal', icon: ArrowDownUp, color: 'text-orange-500 bg-orange-500/20', desc: 'Susun dari kecil ke besar.' }
];

export const Explore = () => {
  const { setCurrentPage, setCurrentLesson } = useAppContext();

  return (
    <div className="p-4 space-y-6 pb-24">
      <div className="text-center py-4">
        <h2 className="text-2xl font-extrabold text-text-main">Mau belajar apa hari ini?</h2>
        <p className="text-text-muted font-medium mt-1">Pilih topik yang ingin kamu pelajari dari cerita</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {topics.map(topic => {
          const Icon = topic.icon;
          return (
            <GlassCard 
              key={topic.id} 
              className="p-5 flex flex-col items-center text-center hover:-translate-y-1 transition-transform cursor-pointer"
              onClick={() => {
                setCurrentLesson(topic.id);
                setCurrentPage('lesson');
              }}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 ${topic.color}`}>
                <Icon size={28} strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-text-main leading-tight mb-1">{topic.id}</h3>
              <p className="text-xs text-text-muted font-medium">{topic.desc}</p>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
};
