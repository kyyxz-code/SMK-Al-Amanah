import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, LogIn } from 'lucide-react';

interface CtaSectionProps {
  onOpenPortal: () => void;
  onOpenModules: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenPortal, onOpenModules }) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-14 bg-gradient-to-r from-[#006194] to-[#007bb9] text-white relative overflow-hidden">
      {/* Floating ambient pulse */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#57dffe]/20 rounded-full blur-2xl pointer-events-none animate-net-pulse" />
      <div className="data-stream-line top-1/2 left-0 w-2/5 opacity-25" style={{ animationDuration: '8s' }} />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        <div className="max-w-2xl">
          <span className="px-3 py-1 rounded-full bg-white/20 font-mono text-xs font-bold tracking-wider uppercase text-[#cce5ff]">
            Sistem Informasi X TJKT 2
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 leading-tight">
            Punya Pertanyaan Mengenai Modul atau Jadwal Praktik?
          </h2>
          <p className="text-sm sm:text-base text-[#cce5ff] mt-2 leading-relaxed">
            Gunakan portal siswa untuk mengakses repositori modul PDF, unggah berkas laporan lab, atau berdiskusi dengan wali kelas dan pembina teknis.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenPortal}
            className="px-6 py-3.5 rounded-lg bg-white text-[#006194] font-mono text-sm font-bold shadow-lg hover:bg-[#f2f3ff] transition-all cursor-pointer flex items-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            <span>Masuk ke Portal Siswa</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenModules}
            className="px-6 py-3.5 rounded-lg bg-white/20 text-white font-mono text-sm font-semibold hover:bg-white/30 transition-all cursor-pointer flex items-center gap-2 border border-white/25"
          >
            <BookOpen className="w-4 h-4" />
            <span>Unduh Modul Praktik</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
