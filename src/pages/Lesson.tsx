import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { lessons } from '../data/lessons';
import { GlassCard } from '../components/GlassCard';
import { ArrowLeft, Check, X as XIcon, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Fraction } from '../components/Fraction';
import { Piko } from '../components/Piko';

export const Lesson = () => {
  const { currentLesson, setCurrentPage, setCurrentLesson, recordAnswer } = useAppContext();
  const [openExampleId, setOpenExampleId] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});

  if (!currentLesson || !lessons[currentLesson]) {
    return (
      <div className="p-4 text-center min-h-[70vh] flex flex-col items-center justify-center">
        <p className="text-text-muted">Materi tidak ditemukan.</p>
        <button onClick={() => setCurrentPage('feed')} className="glass-button px-4 py-2 mt-4 text-blue-500 font-bold">Kembali</button>
      </div>
    );
  }

  const lesson = lessons[currentLesson];
  const [shuffledExamples, setShuffledExamples] = useState<any[]>([]);
  
  React.useEffect(() => {
    if (lesson) {
      setShuffledExamples([...lesson.examples].sort(() => Math.random() - 0.5));
    }
  }, [lesson]);

  const handleBack = () => {
    setCurrentLesson(null);
    setCurrentPage('explore'); // the user might come from feed or explore, explore is safer as base
  };

  const handleOptionSelect = (exampleId: string, option: string, correctAnswer: string) => {
    if (selectedAnswers[exampleId]) return;
    setSelectedAnswers(prev => ({ ...prev, [exampleId]: option }));
    setOpenExampleId(exampleId);
    
    if (option === correctAnswer) {
      recordAnswer(true);
    }
  };

  const renderTextWithFractions = (text: string) => {
    if (typeof text !== 'string') return text;
    const parts = text.split(/(\d+\/\d+)/g);
    return parts.map((part, i) => {
      if (part.match(/\d+\/\d+/)) {
        const [n, d] = part.split('/');
        return <Fraction key={i} n={n} d={d} size="md" className="text-blue-500 mx-1 inline-block align-middle" />;
      }
      return <span key={i} dangerouslySetInnerHTML={{ __html: part.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }} />;
    });
  };

  return (
    <div className="p-4 space-y-6 pb-24">
      <div className="flex items-center space-x-3 mb-6 sticky top-16 z-30 pt-4 pb-2 bg-gradient-to-b from-glass-bg to-transparent backdrop-blur-md -mx-4 px-4">
        <button 
          onClick={handleBack}
          className="p-2 glass-button text-text-muted hover:text-text-main"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-xl font-extrabold text-text-main flex items-center gap-2">
          <span>{lesson.emoji}</span> {lesson.title}
        </h2>
      </div>

      <GlassCard className="p-5 border-l-4 border-l-blue-400">
        <h3 className="font-bold text-lg mb-2 text-text-main">Memahami Konsep</h3>
        <div className="text-text-muted leading-relaxed font-medium">
          {renderTextWithFractions(lesson.intro)}
        </div>
      </GlassCard>

      <div className="space-y-6">
        <h3 className="font-bold text-lg text-text-main pl-2">Kuis Soal Cerita</h3>
        {shuffledExamples.map((example, index) => {
          const isAnswered = !!selectedAnswers[example.id];
          const selected = selectedAnswers[example.id];
          const isCorrect = selected === example.answer;

          return (
            <GlassCard key={example.id} className="p-0 overflow-hidden">
              <div className="p-5">
                <span className="text-xs font-bold text-blue-500 mb-2 block">Soal {index + 1}</span>
                <div className="font-bold text-text-main text-lg mb-4 leading-relaxed">{renderTextWithFractions(example.question)}</div>
                
                <div className="space-y-3">
                  {example.options?.map((opt, i) => {
                    const isThisSelected = selected === opt;
                    const isThisCorrect = opt === example.answer;
                    
                    let btnClass = "bg-glass-bg border-glass-border hover:bg-glass-hover text-text-main";
                    if (isAnswered) {
                      if (isThisCorrect) btnClass = "bg-green-500/20 border-green-500 text-green-700 font-bold shadow-[0_0_10px_rgba(34,197,94,0.3)]";
                      else if (isThisSelected) btnClass = "bg-red-500/20 border-red-500 text-red-700 opacity-80";
                      else btnClass = "bg-glass-bg border-glass-border opacity-50 text-text-muted";
                    }

                    return (
                      <button 
                        key={i}
                        onClick={() => handleOptionSelect(example.id, opt, example.answer)}
                        className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all flex items-center justify-between font-medium ${btnClass}`}
                        disabled={isAnswered}
                      >
                        <div className="flex-1">{renderTextWithFractions(opt)}</div>
                        {isAnswered && isThisCorrect && <Check className="text-green-600" size={20} />}
                        {isAnswered && isThisSelected && !isThisCorrect && <XIcon className="text-red-500" size={20} />}
                      </button>
                    );
                  })}
                </div>
              </div>
              
              <AnimatePresence>
                {openExampleId === example.id && isAnswered && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-glass-border bg-glass-hover"
                  >
                    <div className="p-5 space-y-4">
                      {isCorrect ? (
                        <div className="flex items-center gap-3 text-green-600 bg-green-500/10 p-3 rounded-xl border border-green-500/20">
                          <div className="bg-green-500/20 p-2 rounded-full"><Check size={20} /></div>
                          <p className="font-bold">Hebat, jawabanmu benar!</p>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3 text-red-500 bg-red-500/10 p-3 rounded-xl border border-red-500/20">
                          <div className="bg-red-500/20 p-2 rounded-full"><XIcon size={20} /></div>
                          <div>
                            <p className="font-bold">Sayang sekali, masih kurang tepat.</p>
                            <p className="text-sm mt-1 text-text-main">Jawaban yang benar: <strong>{renderTextWithFractions(example.answer)}</strong></p>
                          </div>
                        </div>
                      )}
                      
                      <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2 flex items-center gap-2">
                          <Lightbulb size={14} /> Penjelasan
                        </span>
                        <div className="text-text-main text-sm leading-relaxed">{renderTextWithFractions(example.explanation)}</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          );
        })}
      </div>
      
      <div className="pt-4 flex justify-center">
         <Piko expression="happy" size="md" message="Ayo selesaikan semua kuisnya!" />
      </div>
    </div>
  );
};
