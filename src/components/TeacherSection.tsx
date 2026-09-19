import React from 'react';
import { motion } from 'motion/react';
import { Quote, RefreshCw, Users, Lightbulb, CheckCircle, ShieldCheck } from 'lucide-react';

export const TeacherSection: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#bfc7d2]/40">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Photo & Identity Banner */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#006194] to-[#007bb9] p-6 sm:p-8 flex flex-col justify-between text-white relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#006398]/40 rounded-full blur-xl pointer-events-none animate-float-reverse" />

            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-md p-1 mb-4 shadow-lg border border-white/20 overflow-hidden"
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPgOj0rbI3ELf73vuEktnYGnPuZWMl6Lg5TbSeF7ZmZIL73bpxaBsFpfLZ6bvtaOclo-muHLeLeSy_eyStBOJqUmw4d6ZyHDX90asEIGJIAKD9IOafW4VfwtwvK4kp_iWm5H_tfT6I-g1ypwWNYgo1cwU8uL41g48mO4f1BcU60JYDQ0YOJIFTk-VgPK02SR9otGnc214SaUsLo-fYY5rzJ_P0u1NyZGCR2QmX6hCrJJ7NQtInjPA6piFS0pzAN6un01ol9d5V4k2qrg"
                  alt="Ibu Irma Kusuma - Wali Kelas X TJKT 2"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>

              <div className="inline-flex px-2.5 py-0.5 rounded bg-white/20 font-mono text-xs uppercase tracking-wider mb-2 text-[#cce5ff] font-semibold">
                Wali Kelas X TJKT 2
              </div>
              <h3 className="text-2xl font-bold leading-tight">Ibu Irma Kusuma</h3>
              <p className="text-xs text-[#cce5ff] mt-1 font-mono">
                Guru Produktif &amp; Pembina Laboratorium TJKT
              </p>
            </div>

            <div className="pt-4 mt-6 bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
              <span className="font-mono text-[11px] tracking-wider uppercase text-white/90 font-bold block mb-1.5">
                KOMPETENSI SPESIALISASI:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-white/25 font-mono text-xs font-medium text-white">
                  MikroTik MTCRE
                </span>
                <span className="px-2 py-0.5 rounded bg-white/25 font-mono text-xs font-medium text-white">
                  Cisco CCNA
                </span>
                <span className="px-2 py-0.5 rounded bg-white/25 font-mono text-xs font-medium text-white">
                  Debian Admin
                </span>
              </div>
            </div>
          </div>

          {/* Quote & Core Values */}
          <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between bg-white">
            <div>
              <Quote className="w-11 h-11 text-[#006194]/30 mb-2" />
              <blockquote className="text-lg sm:text-xl md:text-2xl text-[#131b2e] font-semibold italic leading-relaxed">
                “Keahlian teknis tanpa integritas adalah kesia-siaan. Di kelas ini, kita mendidik teknisi jaringan yang berakhlak mulia, berdisiplin tinggi, dan pantang menyerah sebelum masalah konfigurasi terselesaikan.”
              </blockquote>
              <p className="text-sm sm:text-base text-[#3f4850] mt-4 leading-relaxed">
                Sebagai siswa kejuruan X TJKT 2, kalian tidak hanya belajar memasang konektor atau mengetik perintah command line. Kalian sedang membangun infrastruktur komunikasi masa depan. Jadikan ketelitian, kejujuran dalam berpraktik, serta rasa tanggung jawab sebagai pondasi utama.
              </p>
            </div>

            {/* 4 Core Values Badges */}
            <div className="mt-8 pt-6 bg-[#f2f3ff] p-4 rounded-xl border border-[#bfc7d2]/30">
              <div className="font-mono text-xs text-[#006194] uppercase font-bold tracking-wider mb-3">
                4 Nilai Dasar Komunitas X TJKT 2
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="bg-white p-3 rounded-lg flex items-center gap-2.5 shadow-sm hover-network-card border border-[#bfc7d2]/30"
                >
                  <RefreshCw className="w-5 h-5 text-[#006194] shrink-0" />
                  <span className="font-mono text-xs font-bold text-[#131b2e]">Disiplin Jaringan</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="bg-white p-3 rounded-lg flex items-center gap-2.5 shadow-sm hover-network-card border border-[#bfc7d2]/30"
                >
                  <Users className="w-5 h-5 text-[#00687a] shrink-0" />
                  <span className="font-mono text-xs font-bold text-[#131b2e]">Kolaborasi Tim</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="bg-white p-3 rounded-lg flex items-center gap-2.5 shadow-sm hover-network-card border border-[#bfc7d2]/30"
                >
                  <Lightbulb className="w-5 h-5 text-[#006947] shrink-0" />
                  <span className="font-mono text-xs font-bold text-[#131b2e]">Solutif &amp; Logis</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="bg-white p-3 rounded-lg flex items-center gap-2.5 shadow-sm hover-network-card border border-[#bfc7d2]/30"
                >
                  <ShieldCheck className="w-5 h-5 text-[#007bb9] shrink-0" />
                  <span className="font-mono text-xs font-bold text-[#131b2e]">Standar Industri</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
