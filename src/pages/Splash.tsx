import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Piko } from '../components/Piko';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Splash = () => {
  const { setCurrentPage } = useAppContext();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 text-4xl opacity-20 animate-float">½</div>
      <div className="absolute bottom-40 right-10 text-5xl opacity-20 animate-float-slow">0,75</div>
      <div className="absolute top-40 right-20 text-4xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>×</div>
      <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-float-slow" style={{ animationDelay: '2s' }}>÷</div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <Piko expression="happy" className="w-32 h-32 mx-auto mb-8" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-500">
          PecahanKu
        </h1>
        <h2 className="text-xl font-bold text-text-main mb-2">
          👋 Halo, Matematikawan!
        </h2>
        <p className="text-text-muted mb-8 font-medium leading-relaxed">
          Siap menjelajah dunia Pecahan dan Desimal?<br/>
          Di sini kamu bisa scroll, bermain, mencoba, salah, mencoba lagi, dan menemukan sendiri cara kerja Matematika.
        </p>
      </motion.div>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCurrentPage('feed')}
        className="glass-button bg-blue-600/90 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-2 shadow-blue-500/30 shadow-xl border-blue-400/50"
      >
        <span>MULAI JELAJAH</span>
        <ArrowRight size={20} />
      </motion.button>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-xs text-text-muted mt-8 font-semibold"
      >
        Tidak perlu login • Tidak ada data yang disimpan
      </motion.p>
    </div>
  );
};
