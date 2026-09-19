import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, User, CheckCircle2, Sparkles, AlertCircle, Monitor, Server } from 'lucide-react';
import { SCHEDULE_TODAY, PIKET_STUDENTS, INITIAL_CHECKLIST } from '../data/mockData';
import { DutyChecklistItem } from '../types';

export const ScheduleAndDutySection: React.FC = () => {
  const [checklist, setChecklist] = useState<DutyChecklistItem[]>(INITIAL_CHECKLIST);

  const toggleItem = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completedCount = checklist.filter((item) => item.completed).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  return (
    <section id="jadwal-piket-section" className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-[#f2f3ff]/50 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#006194]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <span className="font-mono text-xs text-[#006194] uppercase font-bold tracking-widest">
              Sinkronisasi Harian
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#131b2e] mt-1">
              Status Hari Ini: Jadwal Mapel &amp; Piket
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-[#dae2fd] px-3.5 py-1.5 rounded-lg border border-[#bfc7d2]/30 w-fit">
            <span className="w-2.5 h-2.5 rounded-full bg-[#006947] animate-pulse" />
            <span className="font-mono text-xs text-[#131b2e] font-semibold">
              Senin Aktif • Sesi Pagi &amp; Siang
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT COLUMN: Timeline Jadwal Pelajaran (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md border border-[#bfc7d2]/40 hover-network-card">
              <div className="flex items-center justify-between pb-4 mb-4 bg-[#f2f3ff] p-3 rounded-lg border border-[#bfc7d2]/30">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#006194]" />
                  <span className="text-base sm:text-lg font-bold text-[#131b2e]">
                    Timeline Mata Pelajaran Hari Ini
                  </span>
                </div>
                <span className="font-mono text-xs text-[#707881] font-semibold">
                  SENIN, 24 FEBRUARI
                </span>
              </div>

              <div className="space-y-4">
                {/* Item 1: Selesai */}
                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl bg-[#006194]/5 hover-network-card border border-[#cce5ff]/40"
                >
                  <div className="flex sm:flex-col items-center justify-between sm:justify-start shrink-0 w-full sm:w-28 gap-2 sm:gap-1">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#006194]">
                      07:30 - 10:00
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#006194] text-white font-mono text-[11px] font-bold">
                      SELESAI
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-[#131b2e]">
                      Dasar-Dasar Kejuruan TJKT
                    </h4>
                    <p className="text-xs sm:text-sm text-[#3f4850] mt-0.5 leading-relaxed">
                      Topologi Bus, Ring, Star, &amp; Arsitektur Hybrid Jaringan Kantor
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-[#131b2e] font-medium">
                        <User className="w-3.5 h-3.5 text-[#006194]" /> Pak Budi Santoso, S.T.
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-[#707881]">
                        <MapPin className="w-3.5 h-3.5" /> Lab Jaringan 2
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Item 2: Berlangsung */}
                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl bg-[#acedff]/35 relative overflow-hidden hover-network-card border border-[#57dffe]/50 shadow-sm"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#00687a]" />
                  <div className="flex sm:flex-col items-center justify-between sm:justify-start shrink-0 w-full sm:w-28 gap-2 sm:gap-1 pl-1">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#00687a]">
                      10:15 - 12:00
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#00687a] text-white font-mono text-[11px] font-bold animate-pulse">
                      BERLANGSUNG
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-[#131b2e]">
                      Pemrograman Dasar &amp; Logika Jaringan
                    </h4>
                    <p className="text-xs sm:text-sm text-[#3f4850] mt-0.5 leading-relaxed">
                      Automasi skrip bash dasar &amp; dasar Python untuk pengujian ping otomatis
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-[#131b2e] font-medium">
                        <User className="w-3.5 h-3.5 text-[#00687a]" /> Bu Rina Anggraini, M.Kom.
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-[#707881]">
                        <Monitor className="w-3.5 h-3.5" /> Lab Komputer 1
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Item 3: Mendatang */}
                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl bg-[#eaedff] hover-network-card border border-[#bfc7d2]/30"
                >
                  <div className="flex sm:flex-col items-center justify-between sm:justify-start shrink-0 w-full sm:w-28 gap-2 sm:gap-1">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#3f4850]">
                      13:00 - 15:15
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#dae2fd] text-[#3f4850] font-mono text-[11px] font-bold">
                      MENDATANG
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-[#131b2e]">
                      Sistem Operasi Jaringan (Server Debian)
                    </h4>
                    <p className="text-xs sm:text-sm text-[#3f4850] mt-0.5 leading-relaxed">
                      Konfigurasi DHCP Server, IP Static Pool, dan Uji Konektivitas Klien
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-[#131b2e] font-medium">
                        <User className="w-3.5 h-3.5 text-[#006194]" /> Pak Fajar Nugroho, S.Kom.
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-[#707881]">
                        <Server className="w-3.5 h-3.5" /> Server Room 2
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Regu Piket Kebersihan (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md h-full flex flex-col justify-between border border-[#bfc7d2]/40 hover-network-card">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#6ffbbe]/50 flex items-center justify-center text-[#006947]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#131b2e]">Regu Piket Kebersihan</h3>
                      <p className="font-mono text-xs text-[#006947] font-bold">TIM PIKET (RABU)</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#6ffbbe] text-[#005236] font-mono text-xs font-bold">
                    6 Petugas
                  </span>
                </div>

                {/* Student Roster Grid */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {PIKET_STUDENTS.map((s, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-2 p-2 rounded bg-[#f2f3ff] border border-[#bfc7d2]/20"
                    >
                      <span
                        className={`w-6 h-6 rounded-full font-mono text-xs flex items-center justify-center font-bold shrink-0 ${s.colorClass}`}
                      >
                        {s.avatarChar}
                      </span>
                      <span className="text-sm text-[#131b2e] font-medium">{s.name}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Interactive Duty Checklist */}
                <div className="space-y-2 mt-4">
                  <div className="font-mono text-xs text-[#707881] uppercase font-bold tracking-wider mb-2 flex items-center justify-between">
                    <span>Checklist SOP Kelas &amp; Lab</span>
                    <span className="text-[#006194]">
                      {completedCount} / {checklist.length} Selesai
                    </span>
                  </div>

                  {checklist.map((item) => (
                    <motion.label
                      key={item.id}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => toggleItem(item.id)}
                      className={`flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition-colors border ${
                        item.completed
                          ? 'bg-[#eaedff] border-[#cce5ff]'
                          : 'bg-[#f2f3ff] border-transparent hover:bg-[#eaedff]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => {}}
                        className="w-4 h-4 rounded text-[#006194] focus:ring-0 accent-[#006194] cursor-pointer"
                      />
                      <span
                        className={`text-xs sm:text-sm text-[#131b2e] ${
                          item.completed ? 'line-through text-[#707881]' : ''
                        }`}
                      >
                        {item.label}
                      </span>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Progress Footer */}
              <div className="mt-5 pt-3 bg-[#f2f3ff] p-3 rounded-lg flex flex-col gap-2 border border-[#bfc7d2]/30">
                {/* Progress bar visual */}
                <div className="w-full bg-[#eaedff] h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-[#00855b] h-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
                <div className="flex items-center justify-between text-[#707881]">
                  <span className="font-mono text-xs">Koordinator: Ahmad Fauzi</span>
                  <span className="font-mono text-xs text-[#006947] font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00855b]" />
                    {progressPercent}% Selesai
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
