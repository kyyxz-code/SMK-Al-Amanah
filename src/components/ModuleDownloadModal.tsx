import React from 'react';
import { motion } from 'motion/react';
import { X, BookOpen, Download, FileText, CheckCircle2 } from 'lucide-react';
import { LAB_MODULES } from '../data/mockData';

interface ModuleDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onToast: (msg: string) => void;
}

export const ModuleDownloadModal: React.FC<ModuleDownloadModalProps> = ({
  isOpen,
  onClose,
  onToast,
}) => {
  if (!isOpen) return null;

  const handleDownloadModule = (title: string) => {
    onToast(`Mengunduh berkas materi PDF: "${title}"`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131b2e]/65 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-[#bfc7d2]/40 relative overflow-hidden flex flex-col max-h-[85vh]"
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#eaedff]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#cce5ff] text-[#006194] flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#131b2e]">Repositori Modul Praktik Lab TJKT 2</h3>
              <p className="font-mono text-xs text-[#707881]">
                Kurikulum Merdeka Kejuruan • SMK Al-Amanah
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#eaedff] text-[#3f4850] hover:bg-[#d2d9f4] flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 overflow-y-auto space-y-3 flex-1 pr-1">
          {LAB_MODULES.map((mod) => (
            <div
              key={mod.id}
              className="p-4 rounded-xl bg-[#f2f3ff] border border-[#bfc7d2]/30 hover-network-card flex items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#006194] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#131b2e] leading-snug">{mod.title}</h4>
                  <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-[#707881]">
                    <span>{mod.category}</span>
                    <span>•</span>
                    <span>{mod.level}</span>
                    <span>•</span>
                    <span>{mod.pages} Halaman ({mod.fileSize})</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => handleDownloadModule(mod.title)}
                className="px-3.5 py-2 rounded-lg bg-[#006194] text-white font-mono text-xs font-bold hover:bg-[#007bb9] transition-colors shrink-0 flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Unduh PDF</span>
              </motion.button>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-3 border-t border-[#eaedff] flex items-center justify-between text-xs text-[#707881] font-mono">
          <span>Format: Dokumen Resmi PDF Labcom • Lisensi Terbuka Siswa</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#eaedff] text-[#131b2e] font-bold rounded-lg hover:bg-[#dae2fd] transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </motion.div>
    </div>
  );
};
