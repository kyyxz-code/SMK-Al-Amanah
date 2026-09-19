import React from 'react';
import { motion } from 'motion/react';
import { Router, Server, Radio, Shield } from 'lucide-react';

const SPECIALIZATIONS = [
  {
    code: '01 / NETWORKING',
    title: 'Computer Networking',
    desc: 'Routing statis & dinamis (OSPF, RIP), VLAN trunking, Subnetting IPv4 CIDR / IPv6, DHCP server, dan konfigurasi MikroTik RouterOS.',
    target: 'Target: MTCNA & CCNA',
    colorBg: 'bg-[#cce5ff]',
    colorText: 'text-[#006194]',
    icon: Router
  },
  {
    code: '02 / SYSTEMS',
    title: 'Server & Cloud Admin',
    desc: 'Administrasi Linux Debian & Ubuntu Server, konfigurasi DNS (Bind9), Web Server Nginx/Apache, FTP, dan Virtualisasi Proxmox.',
    target: 'Target: Linux Professional (LPIC-1)',
    colorBg: 'bg-[#acedff]',
    colorText: 'text-[#00687a]',
    icon: Server
  },
  {
    code: '03 / TELECOM',
    title: 'Telekomunikasi & Jaringan Nirkabel',
    desc: 'Konsep transmisi data nirkabel, konfigurasi Access Point & WiFi enterprise, teknologi seluler, serta instalasi dan terminasi fiber optic (FTTH/FTTX).',
    target: 'Target: Teknisi FTTH BNSP',
    colorBg: 'bg-[#6ffbbe]/50',
    colorText: 'text-[#006947]',
    icon: Radio
  },
  {
    code: '04 / SECURITY',
    title: 'Cyber Security & IoT',
    desc: 'Firewall filter rules, proteksi Port Scanning, analisis paket data Wireshark, hardening router, dan integrasi perangkat sensor IoT.',
    target: 'Target: Junior Cyber Security',
    colorBg: 'bg-[#dae2fd]',
    colorText: 'text-[#006194]',
    icon: Shield
  }
];

export const SpecializationsSection: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-[#f2f3ff]/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs text-[#006194] uppercase font-bold tracking-widest">
            Pilar Keahlian Vokasi
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#131b2e] mt-1">
            Spesialisasi &amp; Fokus Kejuruan TJKT
          </h2>
          <p className="text-sm sm:text-base text-[#3f4850] mt-2 leading-relaxed">
            Kurikulum berbasis kompetensi yang dirancang selaras dengan sertifikasi industri internasional dan kebutuhan dunia kerja modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SPECIALIZATIONS.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover-network-card border border-[#bfc7d2]/40 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-xl ${spec.colorBg} flex items-center justify-center ${spec.colorText} mb-5 group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className={`font-mono text-xs ${spec.colorText} font-bold tracking-wider uppercase mb-1`}>
                    {spec.code}
                  </div>
                  <h3 className="text-lg font-bold text-[#131b2e] mb-2">{spec.title}</h3>
                  <p className="text-xs sm:text-sm text-[#3f4850] leading-relaxed">{spec.desc}</p>
                </div>

                <div className="mt-6 pt-3 bg-[#f2f3ff] p-2.5 rounded-lg border border-[#bfc7d2]/20">
                  <span className="font-mono text-xs text-[#3f4850] font-semibold">{spec.target}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
