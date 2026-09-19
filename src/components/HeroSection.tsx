import React from 'react';
import { motion } from 'motion/react';
import { Network, Users, Calendar, Wifi, GraduationCap, CheckCircle2, Terminal, Award } from 'lucide-react';

interface HeroSectionProps {
  onOpenStudents: () => void;
  onOpenTerminal: () => void;
  onOpenProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenStudents,
  onOpenTerminal,
  onOpenProjects,
}) => {
  const scrollToSchedule = () => {
    const el = document.getElementById('jadwal-piket-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-section" className="relative w-full px-4 sm:px-6 lg:px-8 pt-12 pb-16 overflow-hidden bg-gradient-to-b from-[#f2f3ff]/60 via-[#faf8ff] to-[#faf8ff]">
      {/* Subtle Data Stream Line Across Hero */}
      <div className="data-stream-line top-24 left-0 w-1/3 opacity-30" />
      <div className="data-stream-line top-2/3 right-0 w-1/4 opacity-25" style={{ animationDelay: '2.5s' }} />

      {/* Cyber Geometric Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-[#bfc7d2]/40" />
              <circle cx="40" cy="40" r="1.5" fill="currentColor" className="text-[#006194]/40" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network-grid)" />
        </svg>
      </div>

      {/* Ambient Floating Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#57dffe]/15 rounded-full blur-3xl pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute -top-12 right-10 w-80 h-80 bg-[#cce5ff]/35 rounded-full blur-3xl pointer-events-none -z-10 animate-float-reverse" />

      {/* Ambient Pulsing Network Nodes */}
      <div className="absolute top-28 left-[15%] w-3 h-3 rounded-full bg-[#00687a]/40 animate-net-pulse pointer-events-none" />
      <div className="absolute top-48 right-[12%] w-2.5 h-2.5 rounded-full bg-[#006194]/40 animate-net-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-20 left-[22%] w-2 h-2 rounded-full bg-[#006947]/40 animate-net-pulse pointer-events-none" style={{ animationDelay: '2.7s' }} />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14 relative z-10">
        {/* Left Column: Copy & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col items-start"
        >
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e2e7ff] shadow-sm mb-4 border border-[#bfc7d2]/30">
            <span className="w-2 h-2 rounded-full bg-[#00687a] animate-ping" />
            <span className="font-mono text-xs text-[#006194] uppercase font-bold tracking-widest">
              Tahun Ajaran 2024/2025 • Angkatan X
            </span>
            <span className="text-[#bfc7d2]">•</span>
            <span className="font-mono text-xs text-[#3f4850] font-semibold">TJKT LAB 2</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] tracking-tight leading-[1.15] mb-4">
            Generasi Tangguh{' '}
            <span className="text-[#006194] bg-clip-text">Arsitek Jaringan</span>{' '}
            &amp; Teknologi Masa Depan
          </h1>

          <p className="text-base sm:text-lg text-[#3f4850] max-w-2xl mb-7 leading-relaxed">
            Pusat informasi terpadu, kegiatan belajar kejuruan, kolaborasi proyek laboratorium, dan dokumentasi resmi kelas{' '}
            <strong className="text-[#131b2e] font-semibold">X TJKT 2 SMK Al-Amanah</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenStudents}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#006194] text-white font-mono text-sm font-bold shadow-md hover:bg-[#007bb9] transition-all cursor-pointer"
            >
              <Users className="w-5 h-5" />
              <span>Lihat Profil Kelas</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToSchedule}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#e2e7ff] text-[#131b2e] font-mono text-sm font-semibold hover:bg-[#dae2fd] transition-all cursor-pointer border border-[#bfc7d2]/40"
            >
              <Calendar className="w-5 h-5 text-[#006194]" />
              <span>Jadwal &amp; Agenda Hari Ini</span>
            </motion.button>
          </div>

          {/* Interactive Gateway Status Mini-Pill */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            onClick={onOpenTerminal}
            className="mt-6 flex flex-wrap items-center gap-2 bg-[#f2f3ff] px-3.5 py-2.5 rounded-lg shadow-sm border border-[#bfc7d2]/40 cursor-pointer group hover:border-[#57dffe] transition-all"
            title="Klik untuk membuka Terminal Diagnosa Jaringan"
          >
            <span className="font-mono text-xs text-[#006947] flex items-center gap-1.5 font-bold">
              <Wifi className="w-4 h-4 text-[#00855b]" />
              GATEWAY 192.168.10.1
            </span>
            <span className="text-[#bfc7d2]">•</span>
            <span className="font-mono text-xs text-[#3f4850]">
              SSID: <code className="text-[#006194] font-bold">LAB-TJKT2_5GHz</code>
            </span>
            <span className="text-[#bfc7d2]">•</span>
            <span className="font-mono text-[11px] text-[#005236] bg-[#6ffbbe] px-1.5 py-0.5 rounded font-bold group-hover:bg-[#4edea3] transition-colors">
              ACTIVE
            </span>
            <span className="text-[11px] text-[#006194] font-medium ml-1 hidden sm:inline underline decoration-dotted">
              (Uji Ping)
            </span>
          </motion.div>
        </motion.div>

        {/* Right Column: Holographic Illustrated Network Shield */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full lg:w-[460px] flex justify-center"
        >
          <div className="relative w-full max-w-[380px] aspect-square rounded-2xl bg-[#eaedff] p-6 shadow-xl flex flex-col items-center justify-center text-center overflow-hidden animate-float-slow hover-network-card border border-[#bfc7d2]/40">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#006194]/10 via-[#00687a]/15 to-transparent pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-[#4cd7f6]/30 rounded-full blur-2xl pointer-events-none" />

            {/* Floating decorative node rings */}
            <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-[#00687a] animate-net-pulse" />
            <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-[#006194] animate-net-pulse" style={{ animationDelay: '1.8s' }} />

            {/* Central Illustrated Network Badge */}
            <div className="relative z-10 w-36 h-36 rounded-full bg-white shadow-lg flex items-center justify-center mb-4">
              <div className="w-28 h-28 rounded-full bg-[#006194]/10 flex items-center justify-center">
                <Network className="w-14 h-14 text-[#006194]" />
              </div>
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#006194]/40 animate-spin"
                style={{ animationDuration: '24s' }}
              />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <span className="font-mono text-[11px] tracking-widest uppercase text-[#00687a] font-bold">
                SMK AL-AMANAH VOCATIONAL
              </span>
              <h3 className="text-2xl font-extrabold text-[#131b2e] mt-1">X TJKT 2</h3>
              <p className="font-mono text-xs text-[#3f4850] mt-0.5">Teknik Jaringan Komputer &amp; Telekomunikasi</p>
              <div className="mt-4 flex flex-wrap justify-center items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#e2e7ff] text-[#006194] font-mono text-xs font-semibold border border-[#bfc7d2]/30">
                  MikroTik Academy
                </span>
                <span className="px-2.5 py-1 rounded bg-[#e2e7ff] text-[#00687a] font-mono text-xs font-semibold border border-[#bfc7d2]/30">
                  Cisco NetAcad
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Live Telemetry / Metrics Strip */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="max-w-7xl mx-auto mt-12"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-xl bg-white shadow-md border border-[#bfc7d2]/40">
          {/* Metric 1 */}
          <div
            onClick={onOpenStudents}
            className="flex items-center gap-3.5 p-3 rounded-lg bg-[#f2f3ff]/90 hover-network-card cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-lg bg-[#cce5ff] flex items-center justify-center text-[#006194] shrink-0 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] leading-none">36</div>
              <div className="font-mono text-xs text-[#3f4850] font-medium mt-1">Siswa Terdaftar</div>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="flex items-center gap-3.5 p-3 rounded-lg bg-[#f2f3ff]/90 hover-network-card">
            <div className="w-12 h-12 rounded-lg bg-[#6ffbbe]/60 flex items-center justify-center text-[#006947] shrink-0">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] leading-none">100%</div>
              <div className="font-mono text-xs text-[#3f4850] font-medium mt-1">Kehadiran Rata-rata</div>
            </div>
          </div>

          {/* Metric 3 */}
          <div
            onClick={onOpenProjects}
            className="flex items-center gap-3.5 p-3 rounded-lg bg-[#f2f3ff]/90 hover-network-card cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-lg bg-[#acedff] flex items-center justify-center text-[#00687a] shrink-0 group-hover:scale-105 transition-transform">
              <Terminal className="w-7 h-7" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] leading-none">14+</div>
              <div className="font-mono text-xs text-[#3f4850] font-medium mt-1">Proyek Lab Selesai</div>
            </div>
          </div>

          {/* Metric 4 */}
          <div className="flex items-center gap-3.5 p-3 rounded-lg bg-[#f2f3ff]/90 hover-network-card">
            <div className="w-12 h-12 rounded-lg bg-[#e2e7ff] flex items-center justify-center text-[#006194] shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-[#131b2e] leading-tight">MTCNA &amp; CCNA</div>
              <div className="font-mono text-xs text-[#3f4850] font-medium mt-0.5">Sertifikasi Track</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
