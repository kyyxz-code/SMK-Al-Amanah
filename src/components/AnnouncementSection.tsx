import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Megaphone, Router, MapPin, Wallet, Building2, ChevronRight, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { INITIAL_ANNOUNCEMENTS } from '../data/mockData';
import { Announcement } from '../types';

export const AnnouncementSection: React.FC = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

  const mainAnn = INITIAL_ANNOUNCEMENTS[0];
  const secondaryAnnouncements = INITIAL_ANNOUNCEMENTS.slice(1);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Megaphone className="w-6 h-6 text-[#006194]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#131b2e]">Papan Pengumuman &amp; Agenda Terkini</h2>
        </div>
        <span className="font-mono text-xs text-[#707881] uppercase tracking-wider font-semibold">
          Real-time Bulletin
        </span>
      </div>

      {/* Alert / Main Announcement Card */}
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
        onClick={() => setSelectedAnnouncement(mainAnn)}
        className="p-5 sm:p-6 rounded-xl bg-white shadow-md mb-4 relative overflow-hidden hover-network-card border border-[#bfc7d2]/40 cursor-pointer group"
      >
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#006194]" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pl-1">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-[#cce5ff] flex items-center justify-center text-[#006194] shrink-0 mt-1 group-hover:scale-105 transition-transform">
              <Router className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-[#ffdad6] text-[#93000a] font-mono text-[11px] font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-pulse" />
                  PRAKTIK KEJURUAN
                </span>
                <span className="font-mono text-xs text-[#707881]">{mainAnn.date}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#131b2e] group-hover:text-[#006194] transition-colors">
                {mainAnn.title}
              </h3>
              <p className="text-sm text-[#3f4850] mt-1 leading-relaxed">
                {mainAnn.description}
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <span className="font-mono text-xs text-[#006194] font-bold bg-[#e2e7ff] px-3 py-2 rounded-lg flex items-center gap-1.5 border border-[#bfc7d2]/30">
              <MapPin className="w-4 h-4" />
              {mainAnn.location}
            </span>
            <div className="hidden sm:flex items-center text-[#006194] font-mono text-xs font-semibold group-hover:translate-x-1 transition-transform">
              <span>Detail</span>
              <ChevronRight className="w-4 h-4 ml-0.5" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Secondary Updates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {secondaryAnnouncements.map((item, idx) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -3 }}
            onClick={() => setSelectedAnnouncement(item)}
            className="p-4 rounded-xl bg-[#f2f3ff] shadow-sm flex items-start gap-4 hover-network-card border border-[#bfc7d2]/30 cursor-pointer group"
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                idx === 0 ? 'bg-[#acedff] text-[#00687a]' : 'bg-[#6ffbbe]/50 text-[#006947]'
              }`}
            >
              {idx === 0 ? <Wallet className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span
                  className={`font-mono text-xs font-bold ${
                    idx === 0 ? 'text-[#00687a]' : 'text-[#006947]'
                  }`}
                >
                  {item.category}
                </span>
                <span className="font-mono text-xs text-[#707881]">{item.date}</span>
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-[#131b2e] mt-0.5 group-hover:text-[#006194] transition-colors">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#3f4850] mt-1 line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Announcement Detail Modal */}
      <AnimatePresence>
        {selectedAnnouncement && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131b2e]/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#bfc7d2]/40 relative"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-[#cce5ff] text-[#004b73] font-mono text-xs font-bold">
                  {selectedAnnouncement.category}
                </span>
                <span className="font-mono text-xs text-[#707881]">{selectedAnnouncement.date}</span>
              </div>

              <h3 className="text-xl font-bold text-[#131b2e] mb-2">{selectedAnnouncement.title}</h3>
              <p className="text-sm text-[#3f4850] mb-4 leading-relaxed">{selectedAnnouncement.description}</p>

              {selectedAnnouncement.location && (
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#f2f3ff] text-xs font-mono text-[#006194] font-semibold mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>Lokasi: {selectedAnnouncement.location}</span>
                </div>
              )}

              {selectedAnnouncement.details && (
                <div className="p-3.5 bg-[#eaedff]/60 rounded-xl mb-5 space-y-2">
                  <div className="text-xs font-mono text-[#006194] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Poin Kunci &amp; SOP Pelaksanaan:
                  </div>
                  <ul className="space-y-1.5">
                    {selectedAnnouncement.details.map((d, i) => (
                      <li key={i} className="text-xs text-[#131b2e] flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00855b] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                type="button"
                onClick={() => setSelectedAnnouncement(null)}
                className="w-full py-2.5 bg-[#006194] text-white rounded-lg font-mono text-xs font-bold hover:bg-[#007bb9] transition-colors cursor-pointer"
              >
                Tutup Pengumuman
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
