import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, CheckCircle2, Eye } from 'lucide-react';
import { PROJECTS_DATA } from '../data/mockData';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (proj: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="galeri-proyek-section" className="w-full px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-10">
        <div>
          <span className="font-mono text-xs text-[#006194] uppercase font-bold tracking-widest">
            Karya &amp; Praktik Nyata
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#131b2e] mt-1">
            Dokumentasi Proyek Para Siswa
          </h2>
        </div>
        <button
          type="button"
          onClick={() => onSelectProject(PROJECTS_DATA[0])}
          className="inline-flex items-center gap-1.5 font-mono text-sm text-[#006194] font-bold hover:text-[#007bb9] transition-colors cursor-pointer group w-fit"
        >
          <span>Jelajahi Galeri Selengkapnya</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 3 Projects Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((proj, idx) => {
          const tagColors = [
            'bg-white/90 text-[#006194]',
            'bg-white/90 text-[#00687a]',
            'bg-white/90 text-[#006947]'
          ][idx % 3];

          return (
            <motion.div
              key={proj.id}
              whileHover={{ y: -5 }}
              onClick={() => onSelectProject(proj)}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover-network-card border border-[#bfc7d2]/40 flex flex-col cursor-pointer group"
            >
              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={proj.image}
                  alt={proj.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded shadow-sm backdrop-blur-sm font-mono text-xs font-bold ${tagColors}`}>
                  {proj.tag}
                </span>

                <div className="absolute inset-0 bg-[#006194]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-lg bg-white/90 text-[#006194] font-mono text-xs font-bold shadow-md flex items-center gap-1.5">
                    <Eye className="w-4 h-4" /> Lihat Detail &amp; Skema
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#707881] font-medium">{proj.category}</span>
                  <h3 className="text-base sm:text-lg font-bold text-[#131b2e] mt-1 group-hover:text-[#006194] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3f4850] mt-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#bfc7d2]/20 flex items-center justify-between text-[#707881]">
                  <span
                    className={`font-mono text-xs font-semibold ${
                      idx === 0
                        ? 'text-[#006947]'
                        : idx === 1
                        ? 'text-[#006194]'
                        : 'text-[#00687a]'
                    }`}
                  >
                    {proj.scoreOrMetric}
                  </span>
                  <span className="font-mono text-xs">{proj.date}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
