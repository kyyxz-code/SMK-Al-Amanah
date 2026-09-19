import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Users, Shield, CheckCircle, Laptop, Wifi } from 'lucide-react';
import { STUDENTS_LIST } from '../data/mockData';
import { StudentProfile } from '../types';

interface StudentsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentsModal: React.FC<StudentsModalProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState<'all' | 'officers'>('all');

  if (!isOpen) return null;

  const filteredStudents = STUDENTS_LIST.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.nisn.includes(search) ||
      student.specialty.toLowerCase().includes(search.toLowerCase()) ||
      student.ipAddress.includes(search);

    if (filterRole === 'officers') {
      return matchesSearch && Boolean(student.role);
    }
    return matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131b2e]/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#bfc7d2]/40 overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 bg-[#f2f3ff] border-b border-[#eaedff] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#cce5ff] text-[#006194] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#131b2e]">Buku Induk &amp; Profil Siswa X TJKT 2</h2>
              <p className="font-mono text-xs text-[#707881]">
                Total: 36 Siswa • SMK Al-Amanah Tahun Ajaran 2024/2025
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#eaedff] text-[#3f4850] hover:bg-[#d2d9f4] flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters & Search */}
        <div className="p-4 border-b border-[#bfc7d2]/20 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-3 text-[#707881]" />
            <input
              type="text"
              placeholder="Cari siswa, NISN, atau IP..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-mono rounded-lg border border-[#bfc7d2]/50 focus:border-[#006194] focus:outline-none bg-[#faf8ff]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setFilterRole('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                filterRole === 'all'
                  ? 'bg-[#006194] text-white shadow-sm'
                  : 'bg-[#eaedff] text-[#3f4850] hover:bg-[#dae2fd]'
              }`}
            >
              Semua (36)
            </button>
            <button
              type="button"
              onClick={() => setFilterRole('officers')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                filterRole === 'officers'
                  ? 'bg-[#006194] text-white shadow-sm'
                  : 'bg-[#eaedff] text-[#3f4850] hover:bg-[#dae2fd]'
              }`}
            >
              Pengurus Kelas
            </button>
          </div>
        </div>

        {/* Students Table / Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-[#faf8ff]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredStudents.map((student) => (
              <motion.div
                key={student.id}
                whileHover={{ y: -2 }}
                className="p-3.5 rounded-xl bg-white border border-[#bfc7d2]/30 shadow-sm flex items-start gap-3 hover-network-card"
              >
                <div className="w-10 h-10 rounded-full bg-[#cce5ff] text-[#006194] font-mono text-sm font-bold flex items-center justify-center shrink-0">
                  {student.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="text-sm font-bold text-[#131b2e] truncate">{student.name}</h4>
                    {student.role && (
                      <span className="px-2 py-0.5 rounded bg-[#dae2fd] text-[#004b73] font-mono text-[10px] font-bold shrink-0">
                        {student.role}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#707881] mt-0.5">
                    <span>NISN: {student.nisn}</span>
                    <span>•</span>
                    <span className="text-[#006194] font-semibold">{student.ipAddress}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#bfc7d2]/20 text-[11px]">
                    <span className="text-[#3f4850] truncate font-medium">
                      Keahlian: <strong className="text-[#131b2e]">{student.specialty}</strong>
                    </span>
                    <span className="text-[#006947] font-mono font-bold flex items-center gap-1 shrink-0 ml-1">
                      <CheckCircle className="w-3 h-3 text-[#00855b]" /> 100% Hadir
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredStudents.length === 0 && (
            <div className="text-center py-12 text-[#707881] font-mono text-xs">
              Tidak ada data siswa yang cocok dengan pencarian "{search}".
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#eaedff] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-[#3f4850]">
            <Wifi className="w-4 h-4 text-[#00855b]" />
            <span>Lab Subnet: 192.168.10.0/24 (DHCP Reservation Aktif)</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#006194] text-white rounded-lg font-mono text-xs font-bold hover:bg-[#007bb9] transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </motion.div>
    </div>
  );
};
