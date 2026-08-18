import React, { useState, useEffect } from 'react';
import { feedData } from '../data/feed';
import { GlassCard } from '../components/GlassCard';
import { Piko } from '../components/Piko';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Fraction } from '../components/Fraction';
import { cn } from '../lib/mathUtils';
import { useAppContext } from '../context/AppContext';
import { Topic } from '../types';

const stories: { id: Topic; emoji: string; color: string; title: string }[] = [
  { id: 'Pecahan', emoji: '🍕', color: 'from-blue-400 to-blue-600', title: 'Pecahan' },
  { id: 'Perkalian Pecahan', emoji: '✖️', color: 'from-pink-400 to-pink-600', title: 'Perkalian' },
  { id: 'Pembagian Pecahan', emoji: '➗', color: 'from-amber-400 to-amber-600', title: 'Pembagian' },
  { id: 'Desimal', emoji: '📏', color: 'from-emerald-400 to-emerald-600', title: 'Desimal' },
  { id: 'Membandingkan Desimal', emoji: '⚖️', color: 'from-violet-400 to-violet-600', title: 'Bandingkan' },
  { id: 'Mengurutkan Desimal', emoji: '🔢', color: 'from-orange-400 to-orange-600', title: 'Urutkan' }
];

export const Feed = () => {
  const { setCurrentPage, setCurrentLesson } = useAppContext();
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const [quizResult, setQuizResult] = useState<Record<string, string>>({});
  const [shuffledFeed, setShuffledFeed] = useState<any[]>([]);

  useEffect(() => {
    setShuffledFeed([...feedData].sort(() => Math.random() - 0.5));
  }, []);

  const handleLike = (id: string) => {
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleQuizAnswer = (postId: string, answer: string, correctAnswer: string) => {
    setQuizResult(prev => ({
      ...prev,
      [postId]: answer === correctAnswer ? 'benar' : 'salah'
    }));
  };

  const renderContent = (text: string) => {
    const parts = text.split(/(\d+\/\d+)/g);
    return parts.map((part, i) => {
      if (part.match(/\d+\/\d+/)) {
        const [n, d] = part.split('/');
        return <Fraction key={i} n={n} d={d} size="sm" className="text-blue-500 font-bold mx-1 inline-block align-middle" />;
      }
      return <span key={i} dangerouslySetInnerHTML={{ __html: part.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }} />;
    });
  };

  return (
    <div className="pb-24">
      {/* Stories Section */}
      <div className="pt-4 pb-2 px-4 overflow-x-auto no-scrollbar flex space-x-4">
        {stories.map(story => (
          <div 
            key={story.id} 
            className="flex flex-col items-center space-y-1 shrink-0 cursor-pointer group"
            onClick={() => {
              setCurrentLesson(story.id);
              setCurrentPage('lesson');
            }}
          >
            <div className={`w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr ${story.color} group-hover:scale-105 transition-transform`}>
              <div className="w-full h-full bg-glass-bg border-2 border-glass-border rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-2xl">{story.emoji}</span>
              </div>
            </div>
            <span className="text-xs font-bold text-text-main max-w-[64px] text-center truncate">{story.title}</span>
          </div>
        ))}
      </div>

      <div className="p-4 space-y-6">
        {shuffledFeed.map(post => (
          <GlassCard key={post.id} className="p-0 overflow-hidden">
            {/* Post Header */}
            <div className="p-4 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl shrink-0">
                {post.author.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-text-main leading-none">{post.author.name}</h3>
                  {post.author.role === 'Sistem' && (
                    <span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Admin</span>
                  )}
                </div>
                <p className="text-xs text-text-muted mt-1">{post.timeAgo}</p>
              </div>
            </div>

            {/* Post Content */}
            <div className="p-5 text-text-main text-lg leading-relaxed pt-0">
              {renderContent(post.content)}
            </div>

            {/* Quiz Interaction */}
            {post.action && post.action.type === 'kuis' && (
              <div className="px-5 pb-5">
                {!activeQuiz && !quizResult[post.id] ? (
                  <button 
                    onClick={() => setActiveQuiz(post.id)}
                    className="w-full glass-button py-3 text-blue-500 font-bold"
                  >
                    {post.action.label}
                  </button>
                ) : (
                  <AnimatePresence mode="wait">
                    {!quizResult[post.id] ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3"
                      >
                        <p className="text-sm font-bold text-text-muted mb-2">Pilih jawabanmu:</p>
                        <div className="grid grid-cols-2 gap-3">
                          {['1/2', '3/4', '1/3', '2/5'].map(opt => (
                            <button
                              key={opt}
                              onClick={() => handleQuizAnswer(post.id, opt, post.action!.correctAnswer!)}
                              className="glass-button py-3 font-bold text-text-main"
                            >
                              <Fraction n={opt.split('/')[0]} d={opt.split('/')[1]} size="sm" className="inline-block" />
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`p-4 rounded-xl text-center font-bold ${
                          quizResult[post.id] === 'benar' 
                            ? 'bg-green-500/10 text-green-600 border border-green-500/20' 
                            : 'bg-red-500/10 text-red-500 border border-red-500/20'
                        }`}
                      >
                        {quizResult[post.id] === 'benar' ? '🎉 Yeay! Jawabanmu Benar!' : '😅 Oops! Jawaban belum tepat.'}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            )}

            {/* Post Actions */}
            <div className="px-4 py-3 border-t border-glass-border flex items-center justify-between">
              <div className="flex space-x-6">
                <button 
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center space-x-2 transition-colors ${
                    likedPosts[post.id] ? 'text-pink-500' : 'text-text-muted hover:text-pink-500'
                  }`}
                >
                  <Heart size={20} fill={likedPosts[post.id] ? "currentColor" : "none"} />
                  <span className="font-medium text-sm">{post.likes + (likedPosts[post.id] ? 1 : 0)}</span>
                </button>
                <button className="flex items-center space-x-2 text-text-muted hover:text-blue-500 transition-colors">
                  <MessageCircle size={20} />
                  <span className="font-medium text-sm">{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-text-muted hover:text-green-500 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
              <button className="text-text-muted hover:text-amber-500 transition-colors">
                <Bookmark size={20} />
              </button>
            </div>
          </GlassCard>
        ))}

        <div className="flex justify-center py-4">
          <Piko expression="happy" message="Scroll terus untuk belajar lebih banyak!" size="md" />
        </div>
      </div>
    </div>
  );
};
