import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, User, Menu, X, Wifi, ShieldCheck, Download, Users, Calendar, FolderGit2, BookOpen } from 'lucide-react';

interface HeaderProps {
  onOpenPortal: () => void;
  onOpenStudents: () => void;
  onOpenTerminal: () => void;
  onOpenModules: () => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenPortal,
  onOpenStudents,
  onOpenTerminal,
  onOpenModules,
  activeNav,
  setActiveNav,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isGatewayOnline, setIsGatewayOnline] = useState(true);

  const handleNavClick = (sectionId: string, navKey: string) => {
    setActiveNav(navKey);
    setMobileMenuOpen(false);
    if (navKey === 'profil-siswa') {
      onOpenStudents();
      return;
    }
    if (navKey === 'materi-lab') {
      onOpenModules();
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf8ff]/90 backdrop-blur-xl border-b border-[#eaedff] shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all">
      <div className="h-20 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand & Logo */}
        <div className="flex items-center gap-3">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer flex items-center gap-3"
            onClick={() => handleNavClick('hero-section', 'beranda')}
          >
            <img
              src="https://lh3.googleusercontent.com/aida/AEtjO1U8rJSDZ1R8BhnLGoqfzlQT2ZaIJHgmICazD7RPUDVC74MoDdtXcEHVRbAqA-r_dtJJ-SBlkHWpHKHHnHvs4f9eG7Jc-dHzuzGd9WXVD1_6J2veHdvNXJr4gzSZ4zX5l6tQpnU-rRfkX_GLNrg7x2kUgeNz4YMIicIXiyiG_EdHc9vzhFzhp340de5thO5IvLbD1m0orC6mBrQM54lugGFLPXoq-K2h5pAgikm6-EnljeBsBDKxGFRM-eQ"
              alt="Logo X TJKT 2 Al-Amanah"
              className="h-8 w-auto object-contain"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold tracking-tight text-[#131b2e]">X TJKT 2</span>
                <span className="text-[#bfc7d2] font-medium">•</span>
                <span className="text-xs text-[#006194] font-semibold tracking-wider font-mono">SMK AL-AMANAH</span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenTerminal();
                  }}
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#eaedff] text-[11px] text-[#131b2e] hover:bg-[#d2d9f4] transition-colors cursor-pointer group"
                  title="Klik untuk diagnosa jaringan"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00855b] animate-pulse"></span>
                  <span className="text-[#006947] font-bold tracking-wide uppercase font-mono group-hover:underline">
                    Online / Connected
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-[#eaedff]/60 p-1 rounded-xl border border-[#bfc7d2]/30">
          <button
            type="button"
            onClick={() => handleNavClick('hero-section', 'beranda')}
            className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-all ${
              activeNav === 'beranda'
                ? 'bg-[#007bb9] text-[#fdfcff] shadow-sm'
                : 'text-[#3f4850] hover:bg-[#e2e7ff] hover:text-[#131b2e]'
            }`}
          >
            Beranda
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('profil-siswa', 'profil-siswa')}
            className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-all ${
              activeNav === 'profil-siswa'
                ? 'bg-[#007bb9] text-[#fdfcff] shadow-sm'
                : 'text-[#3f4850] hover:bg-[#e2e7ff] hover:text-[#131b2e]'
            }`}
          >
            Profil &amp; Siswa
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('jadwal-piket-section', 'jadwal-piket')}
            className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-all ${
              activeNav === 'jadwal-piket'
                ? 'bg-[#007bb9] text-[#fdfcff] shadow-sm'
                : 'text-[#3f4850] hover:bg-[#e2e7ff] hover:text-[#131b2e]'
            }`}
          >
            Jadwal &amp; Piket
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('galeri-proyek-section', 'galeri-proyek')}
            className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-all ${
              activeNav === 'galeri-proyek'
                ? 'bg-[#007bb9] text-[#fdfcff] shadow-sm'
                : 'text-[#3f4850] hover:bg-[#e2e7ff] hover:text-[#131b2e]'
            }`}
          >
            Galeri &amp; Proyek
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('materi-lab', 'materi-lab')}
            className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-all ${
              activeNav === 'materi-lab'
                ? 'bg-[#007bb9] text-[#fdfcff] shadow-sm'
                : 'text-[#3f4850] hover:bg-[#e2e7ff] hover:text-[#131b2e]'
            }`}
          >
            Materi &amp; Lab
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenPortal}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#006194] text-white font-mono text-sm font-semibold hover:bg-[#007bb9] shadow-sm transition-all cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
            <span>Portal Siswa / Login</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={onOpenPortal}
            className="w-9 h-9 rounded-full bg-[#006194] text-white flex items-center justify-center shadow-sm cursor-pointer hover:bg-[#007bb9]"
            title="Profil Pengguna"
          >
            <User className="w-4 h-4" />
          </motion.button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#eaedff] text-[#131b2e] hover:bg-[#d2d9f4] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#faf8ff] border-b border-[#bfc7d2]/40 px-4 py-4 space-y-2"
          >
            <button
              onClick={() => handleNavClick('hero-section', 'beranda')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-[#131b2e] hover:bg-[#eaedff] flex items-center gap-2"
            >
              Beranda
            </button>
            <button
              onClick={() => handleNavClick('profil-siswa', 'profil-siswa')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-[#131b2e] hover:bg-[#eaedff] flex items-center gap-2"
            >
              <Users className="w-4 h-4 text-[#006194]" /> Profil &amp; Siswa (36 Siswa)
            </button>
            <button
              onClick={() => handleNavClick('jadwal-piket-section', 'jadwal-piket')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-[#131b2e] hover:bg-[#eaedff] flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#006194]" /> Jadwal &amp; Piket Hari Ini
            </button>
            <button
              onClick={() => handleNavClick('galeri-proyek-section', 'galeri-proyek')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-[#131b2e] hover:bg-[#eaedff] flex items-center gap-2"
            >
              <FolderGit2 className="w-4 h-4 text-[#006194]" /> Galeri &amp; Proyek Siswa
            </button>
            <button
              onClick={() => handleNavClick('materi-lab', 'materi-lab')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-[#131b2e] hover:bg-[#eaedff] flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#006194]" /> Materi &amp; Repositori Lab
            </button>
            <div className="pt-2 border-t border-[#bfc7d2]/30">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortal();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-[#006194] text-white font-mono text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <Terminal className="w-4 h-4" /> Masuk Portal Siswa
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
