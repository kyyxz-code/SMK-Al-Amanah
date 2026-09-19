import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Download, CheckCircle2, FileCode, Check, Cpu } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onToast: (msg: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onToast,
}) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!project) return null;

  const handleDownload = () => {
    setDownloaded(true);
    onToast(`Berhasil mengunduh berkas konfigurasi: ${project.downloadFilename || 'project-config.zip'}`);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131b2e]/65 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#bfc7d2]/40 overflow-hidden"
      >
        {/* Header Image & Close */}
        <div className="relative h-60 w-full bg-slate-900 overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.alt}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="px-2.5 py-0.5 rounded bg-white/20 backdrop-blur-sm font-mono text-xs font-bold text-[#acedff]">
              {project.tag} • {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white leading-tight">
              {project.title}
            </h3>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-300 mt-1">
              <span>{project.scoreOrMetric}</span>
              <span>•</span>
              <span>{project.date}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm leading-relaxed">
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#006194] mb-1">
              Ringkasan Proyek
            </h4>
            <p className="text-[#3f4850]">{project.description}</p>
          </div>

          {/* Technical Documentation */}
          <div className="p-4 rounded-xl bg-[#f2f3ff] border border-[#bfc7d2]/30">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#131b2e] mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#006194]" />
              Spesifikasi Teknis &amp; SOP Praktik:
            </h4>
            <p className="text-xs sm:text-sm text-[#3f4850] leading-relaxed">
              {project.documentation}
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#707881] mb-2">
              Perangkat &amp; Standar yang Digunakan
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-[#eaedff] text-[#004b73] font-mono text-xs font-semibold border border-[#bfc7d2]/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#faf8ff] border-t border-[#eaedff] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#eaedff] text-[#3f4850] font-mono text-xs font-semibold hover:bg-[#d2d9f4] transition-colors cursor-pointer"
          >
            Tutup
          </button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-lg bg-[#006194] text-white font-mono text-xs font-bold hover:bg-[#007bb9] transition-all cursor-pointer flex items-center gap-2 shadow-sm"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4 text-[#6ffbbe]" />
                <span>Tersimpan!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Unduh File ({project.downloadFilename || 'Config'})</span>
              </>
            )}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
