import React, { useState, useEffect, useMemo } from 'react';
import { questions } from '../data/questions';
import { GlassCard } from '../components/GlassCard';
import { Piko } from '../components/Piko';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { Question } from '../types';
import { Lightbulb, ArrowRight, X } from 'lucide-react';
import { Fraction } from '../components/Fraction';

export const Challenge = () => {
  const { recordAnswer, markTopicTried } = useAppContext();
  
  const [challengeMode, setChallengeMode] = useState<'menu' | 'playing' | 'result'>('menu');
  const [sessionQs, setSessionQs] = useState<Question[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  
  const [gameState, setGameState] = useState<'playing' | 'feedback' | 'explanation'>('playing');
  const [selectedAnswer, setSelectedAnswer] = useState<any>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);

  const startChallenge = (mode: 'TKA' | 'PISA' | 'Campuran') => {
    let pool = questions;
    if (mode !== 'Campuran') {
      pool = questions.filter(q => q.category === mode);
    }
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 5);
    setSessionQs(shuffled);
    setCurrentQIndex(0);
    setScore(0);
    setGameState('playing');
    setHintLevel(0);
    setSelectedAnswer(null);
    setIsCorrect(false);
    setChallengeMode('playing');
  };

  const handleNext = () => {
    if (currentQIndex < sessionQs.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setGameState('playing');
      setSelectedAnswer(null);
      setIsCorrect(false);
      setHintLevel(0);
    } else {
      setChallengeMode('result');
    }
  };

  const currentQ = sessionQs[currentQIndex];

  const checkAnswer = (answer: string | string[]) => {
    let correct = false;
    if (Array.isArray(currentQ.correctAnswer) && Array.isArray(answer)) {
      correct = JSON.stringify(answer) === JSON.stringify(currentQ.correctAnswer);
    } else {
      correct = answer === currentQ.correctAnswer;
    }
    
    setIsCorrect(correct);
    setSelectedAnswer(answer);
    setGameState('feedback');
    recordAnswer(correct);
    if (correct) {
      setScore(prev => prev + 1);
    }
    markTopicTried(currentQ.topic);
  };

  const showHint = () => {
    if (hintLevel < 3) setHintLevel(prev => prev + 1);
  };

  const renderTextWithFractions = (text: string) => {
    const parts = text.split(/(\d+\/\d+)/g);
    return parts.map((part, i) => {
      if (part.match(/\d+\/\d+/)) {
        const [n, d] = part.split('/');
        return <Fraction key={i} n={n} d={d} size="md" className="text-blue-500 mx-1 inline-block align-middle" />;
      }
      return <span key={i} dangerouslySetInnerHTML={{ __html: part.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
    });
  };

  // Multiple Choice specific renderer
  const renderMultipleChoice = () => {
    if (!currentQ.options) return null;
    return (
      <div className="space-y-3">
        {currentQ.options.map((opt, i) => {
          const isSelected = selectedAnswer === opt;
          const isThisCorrect = opt === currentQ.correctAnswer;
          const showStatus = gameState !== 'playing';
          
          let btnClass = "bg-glass-bg border-glass-border hover:bg-glass-hover text-text-main";
          if (showStatus) {
            if (isThisCorrect) btnClass = "bg-green-500/20 border-green-500 text-green-700 font-bold";
            else if (isSelected) btnClass = "bg-red-500/20 border-red-500 text-red-700 opacity-80";
            else btnClass = "bg-glass-bg border-glass-border opacity-50 text-text-muted";
          } else if (isSelected) {
            btnClass = "bg-blue-500/20 border-blue-500 text-blue-500";
          }

          return (
            <button 
              key={i}
              onClick={() => gameState === 'playing' && checkAnswer(opt)}
              disabled={gameState !== 'playing'}
              className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all flex justify-between items-center ${btnClass}`}
            >
              <div className="font-medium text-lg">{renderTextWithFractions(opt)}</div>
            </button>
          );
        })}
      </div>
    );
  };

  // Ordering specific renderer
  const renderOrdering = () => {
    // Basic implementation for ordering: for mobile it's hard, let's just use buttons for sequence picking.
    // To simplify and avoid dragging bugs, we render options as tap-to-select sequence.
    // If we want a real ordering, we need a separate state, but for now we can treat it like multiple choice
    // since the 'options' in ordering actually are strings we can pick from. Wait, the generated data has
    // ordering options as just 3-4 strings that need to be ordered. 
    // Wait, in generate_questions.cjs, I did `options: ['0,5', '0,2', '0,8', '0,1']` and `correctAnswer: ['0,1', '0,2', '0,5', '0,8']`.
    // I can render them as tap-to-select.
    
    // For simplicity, let's just use the currentQ options and let user tap them in order.
    const [currentSelection, setCurrentSelection] = useState<string[]>([]);
    
    useEffect(() => {
      setCurrentSelection([]);
    }, [currentQ]);

    const handleSelectOrder = (opt: string) => {
      if (gameState !== 'playing') return;
      if (currentSelection.includes(opt)) {
        setCurrentSelection(prev => prev.filter(item => item !== opt));
      } else {
        const newSel = [...currentSelection, opt];
        setCurrentSelection(newSel);
        if (newSel.length === currentQ.options?.length) {
          checkAnswer(newSel);
        }
      }
    };

    if (!currentQ.options) return null;

    return (
      <div className="space-y-4">
        <p className="text-sm text-text-muted text-center mb-2">Ketuk pilihan sesuai urutan yang benar</p>
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {currentSelection.map((opt, i) => (
             <div key={i} className="px-4 py-2 bg-blue-500/20 text-blue-700 font-bold rounded-lg border border-blue-500/50">
               {opt}
             </div>
          ))}
          {currentSelection.length === 0 && <div className="text-text-muted text-sm italic">Belum ada pilihan</div>}
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {currentQ.options.map((opt, i) => {
            const isSelected = currentSelection.includes(opt);
            return (
              <button 
                key={i}
                onClick={() => handleSelectOrder(opt)}
                disabled={isSelected || gameState !== 'playing'}
                className={`px-4 py-3 rounded-xl border-2 transition-all font-bold text-lg
                  ${isSelected ? 'bg-glass-hover border-glass-border opacity-50 text-text-muted' : 'bg-glass-bg border-glass-border hover:bg-glass-hover text-text-main'}
                `}
              >
                {opt}
              </button>
            );
          })}
        </div>
        {gameState !== 'playing' && (
          <div className="mt-4 p-4 bg-glass-hover rounded-xl border border-glass-border">
            <span className="text-xs text-text-muted block mb-1">Urutan yang benar:</span>
            <div className="font-bold text-green-600 flex flex-wrap gap-2">
              {(currentQ.correctAnswer as string[]).map((ans, i) => (
                 <span key={i} className="px-2 py-1 bg-green-500/20 rounded">{ans}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  if (challengeMode === 'menu') {
    return (
      <div className="p-4 flex flex-col items-center justify-center min-h-[75vh]">
        <h2 className="text-3xl font-extrabold text-text-main mb-2">Zona Tantangan</h2>
        <p className="text-text-muted text-center mb-10">Pilih mode tantanganmu. Kamu akan diberikan 5 soal acak yang seru!</p>
        
        <div className="w-full max-w-sm space-y-4">
          <button onClick={() => startChallenge('TKA')} className="w-full glass-button p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"></div>
            <h3 className="text-xl font-black text-blue-500">🧠 Mode Konsep (TKA)</h3>
            <p className="text-sm text-text-muted mt-1">Uji pemahaman dasar matematika</p>
          </button>
          
          <button onClick={() => startChallenge('PISA')} className="w-full glass-button p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors"></div>
            <h3 className="text-xl font-black text-pink-500">📚 Mode Literasi (PISA)</h3>
            <p className="text-sm text-text-muted mt-1">Selesaikan masalah dari cerita sehari-hari</p>
          </button>
          
          <button onClick={() => startChallenge('Campuran')} className="w-full glass-button p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors"></div>
            <h3 className="text-xl font-black text-violet-500">🌪️ Mode Campuran</h3>
            <p className="text-sm text-text-muted mt-1">Tantangan acak dari semua kategori</p>
          </button>
        </div>
      </div>
    );
  }

  if (challengeMode === 'result') {
    return (
      <div className="p-4 flex flex-col items-center justify-center min-h-[75vh] space-y-6">
        <div className="text-7xl">🏆</div>
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-text-main">Tantangan Selesai!</h2>
          <p className="text-text-muted mt-1">Kerja bagus, kamu telah menyelesaikannya.</p>
        </div>
        
        <GlassCard className="p-8 text-center w-full max-w-sm">
           <p className="text-text-muted text-lg mb-2">Skor Akhir</p>
           <p className="text-6xl font-black text-blue-500">{score} / 5</p>
           <p className="text-text-main font-bold mt-6 bg-glass-hover py-2 px-4 rounded-full border border-glass-border">Kamu mendapatkan +{score * 10} XP!</p>
        </GlassCard>
        
        <button 
          onClick={() => setChallengeMode('menu')} 
          className="w-full max-w-sm glass-button p-4 text-lg font-bold text-text-main bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30"
        >
          Main Lagi
        </button>
      </div>
    );
  }

  if (!currentQ) return <div className="p-4">Memuat soal...</div>;

  return (
    <div className="p-4 space-y-6 pb-24">
      {/* Header */}
      <div className="flex justify-between items-center bg-glass-bg border border-glass-border p-3 rounded-2xl shadow-sm">
        <div className="flex gap-1">
          {sessionQs.map((_, i) => (
             <div key={i} className={`h-2 w-8 rounded-full ${i < currentQIndex ? 'bg-green-500' : i === currentQIndex ? 'bg-blue-500' : 'bg-glass-hover border border-glass-border'}`} />
          ))}
        </div>
        <button onClick={() => setChallengeMode('menu')} className="text-text-muted hover:text-red-500 p-1">
          <X size={20} />
        </button>
      </div>

      <div className="flex justify-between text-xs font-bold px-1">
        <span className="text-blue-500 bg-blue-500/10 px-2 py-1 rounded">{currentQ.category}</span>
        <span className="text-violet-500 bg-violet-500/10 px-2 py-1 rounded">{currentQ.topic}</span>
      </div>

      <GlassCard className="p-6">
        <div className="space-y-4">
          <p className="text-lg font-medium text-text-main leading-relaxed">{renderTextWithFractions(currentQ.stimulus)}</p>
          <p className="text-xl font-bold text-text-main">{renderTextWithFractions(currentQ.question)}</p>
        </div>
      </GlassCard>

      <div className="space-y-4">
        {currentQ.type === 'MULTIPLE_CHOICE' ? renderMultipleChoice() : renderOrdering()}
      </div>

      {/* Hints & Actions */}
      {gameState === 'playing' ? (
        <div className="pt-2">
          {hintLevel > 0 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 space-y-2">
              {hintLevel >= 1 && <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl text-amber-600 font-medium text-sm flex gap-2"><Lightbulb size={18} className="shrink-0" /> {renderTextWithFractions(currentQ.hint1)}</div>}
              {hintLevel >= 2 && <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl text-amber-600 font-medium text-sm flex gap-2"><Lightbulb size={18} className="shrink-0" /> {renderTextWithFractions(currentQ.hint2)}</div>}
              {hintLevel >= 3 && <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl text-amber-600 font-medium text-sm flex gap-2"><Lightbulb size={18} className="shrink-0" /> {renderTextWithFractions(currentQ.hint3)}</div>}
            </motion.div>
          )}
          {hintLevel < 3 && (
            <button onClick={showHint} className="text-blue-500 font-bold text-sm flex items-center justify-center gap-1 w-full p-2">
              <Lightbulb size={16} /> Butuh Bantuan?
            </button>
          )}
        </div>
      ) : (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 pt-2">
          {currentQ.explanation && (
            <GlassCard className="p-5 border-l-4 border-l-blue-500">
              <h4 className="font-bold text-blue-500 mb-2">Penjelasan</h4>
              <p className="text-text-main text-sm mb-2">{renderTextWithFractions(currentQ.explanation.proses)}</p>
              <p className="text-text-main font-bold">{renderTextWithFractions(currentQ.explanation.kesimpulan)}</p>
            </GlassCard>
          )}
          <button 
            onClick={handleNext}
            className="w-full p-4 rounded-xl font-bold text-lg text-white shadow-lg bg-blue-500 hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            {currentQIndex < sessionQs.length - 1 ? 'Soal Selanjutnya' : 'Lihat Hasil Akhir'}
            <ArrowRight size={20} />
          </button>
        </motion.div>
      )}
    </div>
  );
};
