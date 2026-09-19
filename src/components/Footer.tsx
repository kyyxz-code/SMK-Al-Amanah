import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Network, Code, MessageSquare, Newspaper } from 'lucide-react';

interface FooterProps {
  onOpenTerminal: () => void;
  onOpenModules: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal, onOpenModules }) => {
  return (
    <footer className="w-full bg-[#f2f3ff] text-[#131b2e] pt-14 pb-8 border-t border-[#eaedff] shadow-[0_-1px_8px_rgba(0,0,0,0.03)]">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1U8rJSDZ1R8BhnLGoqfzlQT2ZaIJHgmICazD7RPUDVC74MoDdtXcEHVRbAqA-r_dtJJ-SBlkHWpHKHHnHvs4f9eG7Jc-dHzuzGd9WXVD1_6J2veHdvNXJr4gzSZ4zX5l6tQpnU-rRfkX_GLNrg7x2kUgeNz4YMIicIXiyiG_EdHc9vzhFzhp340de5thO5IvLbD1m0orC6mBrQM54lugGFLPXoq-K2h5pAgikm6-EnljeBsBDKxGFRM-eQ"
                alt="Logo X TJKT 2 Al-Amanah"
                className="h-8 w-auto object-contain"
              />
              <span className="text-xl font-bold text-[#131b2e]">X TJKT 2</span>
            </div>
            <p className="text-lg text-[#006194] font-semibold italic mt-1 font-serif">
              “Connecting Knowledge, Building the Future”
            </p>
            <p className="text-xs sm:text-sm text-[#3f4850] max-w-md leading-relaxed">
              Portal Komunitas &amp; Pusat Pembelajaran Terpadu Teknik Jaringan Komputer dan Telekomunikasi SMK Al-Amanah. Mengakselerasi talenta teknis di bidang network engineering, server systems, dan telekomunikasi digital.
            </p>
          </div>

          {/* Campus & Contacts */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <div className="font-mono text-xs text-[#006194] uppercase tracking-wider font-bold">
              Kampus &amp; Kontak
            </div>
            <div className="flex items-start gap-2.5 text-[#3f4850] text-xs sm:text-sm leading-relaxed">
              <MapPin className="w-4 h-4 text-[#006194] mt-0.5 shrink-0" />
              <span>
                SMK Al-Amanah, Jl. Cibogo Indah No.Ds, Cangkuang Kulon, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40258, Indonesia
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-[#3f4850] text-xs sm:text-sm">
              <Mail className="w-4 h-4 text-[#006194] shrink-0" />
              <a href="mailto:dikialfathtjktalam2@gmail.com" className="hover:text-[#006194] transition-colors underline decoration-dotted">
                dikialfathtjktalam2@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-[#3f4850] text-xs sm:text-sm">
              <Phone className="w-4 h-4 text-[#006194] shrink-0" />
              <a href="tel:+6282245324316" className="hover:text-[#006194] transition-colors">
                +62 82245324316 (Lab TJKT 2)
              </a>
            </div>
          </div>

          {/* Community Connectivity */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <div className="font-mono text-xs text-[#006194] uppercase tracking-wider font-bold">
              Konektivitas Komunitas
            </div>
            <p className="text-xs sm:text-sm text-[#3f4850] leading-relaxed">
              Terhubung dengan saluran dokumentasi, repository konfigurasi, dan aktivitas harian kelas kami.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenTerminal}
                className="w-9 h-9 rounded-lg bg-[#e2e7ff] flex items-center justify-center text-[#3f4850] hover:bg-[#006194] hover:text-white transition-colors cursor-pointer border border-[#bfc7d2]/30"
                title="Lab Terminal Hub"
              >
                <Network className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenModules}
                className="w-9 h-9 rounded-lg bg-[#e2e7ff] flex items-center justify-center text-[#3f4850] hover:bg-[#006194] hover:text-white transition-colors cursor-pointer border border-[#bfc7d2]/30"
                title="Config Repositories & Modules"
              >
                <Code className="w-4 h-4" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/6282245324316"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#e2e7ff] flex items-center justify-center text-[#3f4850] hover:bg-[#006194] hover:text-white transition-colors cursor-pointer border border-[#bfc7d2]/30"
                title="WhatsApp Forum Diskusi"
              >
                <MessageSquare className="w-4 h-4" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const el = document.getElementById('jadwal-piket-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-9 h-9 rounded-lg bg-[#e2e7ff] flex items-center justify-center text-[#3f4850] hover:bg-[#006194] hover:text-white transition-colors cursor-pointer border border-[#bfc7d2]/30"
                title="Feed & Warta Kelas"
              >
                <Newspaper className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom copyright banner */}
        <div className="pt-4 bg-[#eaedff] flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-3 rounded-xl border border-[#bfc7d2]/20">
          <span className="font-mono text-xs text-[#3f4850] font-medium text-center sm:text-left">
            Dikelola oleh Tim Multimedia &amp; Jaringan X TJKT 2
          </span>
          <span className="font-mono text-xs text-[#707881]">
            © 2025 SMK Al-Amanah. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
