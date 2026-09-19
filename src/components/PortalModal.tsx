import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, X, User, Lock, CheckCircle2, BookOpen, Clock, FileText, Download } from 'lucide-react';
import { STUDENTS_LIST } from '../data/mockData';

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortalModal: React.FC<PortalModalProps> = ({ isOpen, onClose }) => {
  const [nisn, setNisn] = useState('0078129001');
  const [password, setPassword] = useState('••••••••');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(STUDENTS_LIST[0]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const found = STUDENTS_LIST.find((s) => s.nisn === nisn) || STUDENTS_LIST[0];
    setSelectedStudent(found);
    setIsLoggedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131b2e]/65 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-[#bfc7d2]/40 relative overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#eaedff]">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#cce5ff] text-[#006194] flex items-center justify-center">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#131b2e]">Portal Siswa X TJKT 2</h3>
              <p className="font-mono text-xs text-[#707881]">Sistem Akademik &amp; Laboratorium Terpadu</p>
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

        {!isLoggedIn ? (
          /* Login Form */
          <form onSubmit={handleLogin} className="mt-5 space-y-4">
            <div>
              <label className="block text-xs font-mono font-semibold text-[#131b2e] mb-1">
                Nomor Induk Siswa Nasional (NISN)
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-3 text-[#707881]" />
                <input
                  type="text"
                  value={nisn}
                  onChange={(e) => setNisn(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm font-mono rounded-lg border border-[#bfc7d2]/60 focus:border-[#006194] focus:outline-none bg-[#faf8ff]"
                  placeholder="Masukkan NISN siswa..."
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-[#131b2e] mb-1">
                Kata Sandi / PIN Lab
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-3 text-[#707881]" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm font-mono rounded-lg border border-[#bfc7d2]/60 focus:border-[#006194] focus:outline-none bg-[#faf8ff]"
                />
              </div>
            </div>

            <div className="p-3 bg-[#f2f3ff] rounded-lg text-xs text-[#3f4850] font-mono">
              💡 <strong>Demo Akses Cepat:</strong> Klik Masuk langsung untuk melihat dashboard atas nama{' '}
              <strong className="text-[#006194]">Ahmad Fauzi (Ketua Kelas)</strong>.
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-2.5 rounded-lg bg-[#006194] text-white font-mono text-xs font-bold hover:bg-[#007bb9] transition-all cursor-pointer shadow-md"
            >
              Masuk ke Portal Siswa
            </motion.button>
          </form>
        ) : (
          /* Logged In Dashboard View */
          <div className="mt-5 space-y-4">
            <div className="p-4 rounded-xl bg-[#cce5ff]/40 border border-[#93ccff]/60 flex items-center justify-between">
              <div>
                <span className="font-mono text-[11px] text-[#006194] uppercase font-bold">
                  Siswa Terverifikasi • {selectedStudent.role || 'Siswa Praktikan'}
                </span>
                <h4 className="text-lg font-bold text-[#131b2e]">{selectedStudent.name}</h4>
                <p className="font-mono text-xs text-[#3f4850]">
                  NISN: {selectedStudent.nisn} • IP Lab: {selectedStudent.ipAddress}
                </p>
              </div>
              <div className="text-right">
                <span className="px-2.5 py-1 rounded bg-[#6ffbbe] text-[#005236] font-mono text-xs font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Hadir
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#f2f3ff] border border-[#bfc7d2]/30">
                <div className="text-[#707881] font-mono">Sertifikasi Target</div>
                <div className="font-bold text-[#131b2e] text-sm mt-0.5">MikroTik MTCNA</div>
                <div className="text-[#00855b] font-mono text-[11px] mt-1">Status: Siap Uji</div>
              </div>
              <div className="p-3 rounded-lg bg-[#f2f3ff] border border-[#bfc7d2]/30">
                <div className="text-[#707881] font-mono">Nilai Rata-rata Lab</div>
                <div className="font-bold text-[#131b2e] text-sm mt-0.5">94.5 / 100</div>
                <div className="text-[#006194] font-mono text-[11px] mt-1">Peringkat 1 dari 36</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-xs text-[#707881] font-bold uppercase tracking-wider">
                Tugas Praktik Mendatang
              </div>
              <div className="p-3 rounded-lg bg-white border border-[#bfc7d2]/30 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#006194]" />
                  <div>
                    <div className="text-xs font-bold text-[#131b2e]">Laporan Konfigurasi OSPF Area 0</div>
                    <div className="text-[11px] text-[#707881] font-mono">Batas: 26 Feb 2025 • LabCom 2</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#ffdad6] text-[#93000a] font-mono text-[10px] font-bold">
                  Wajib
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsLoggedIn(false)}
                className="flex-1 py-2 rounded-lg bg-[#eaedff] text-[#3f4850] font-mono text-xs font-semibold hover:bg-[#d2d9f4] transition-colors"
              >
                Ganti Akun Siswa
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2 rounded-lg bg-[#006194] text-white font-mono text-xs font-bold hover:bg-[#007bb9] transition-colors"
              >
                Selesai
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
