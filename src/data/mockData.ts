import { Announcement, ScheduleItem, DutyStudent, DutyChecklistItem, StudentProfile, ProjectItem, ModuleItem } from '../types';

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    category: 'PRAKTIK KEJURUAN',
    date: 'Rabu Depan • 26 Februari 2025',
    title: 'Ujian Praktik Perakitan & Konfigurasi Routing Dinamis (OSPF)',
    description: 'Seluruh siswa diwajibkan membawa kabel console USB-to-RJ45 pribadi dan memverifikasi modul Cisco Packet Tracer versi 8.2 terpasang pada laptop masing-masing sebelum sesi lab dimulai.',
    location: 'LabCom Lantai 2',
    urgent: true,
    details: [
      'Topologi: Single Area OSPF (Area 0)',
      'Subnetting: Variable Length Subnet Masking (VLSM)',
      'Batas Waktu Praktik: 90 Menit',
      'Peralatan: Cisco Router 2911, Switch 2960, Rollover Console Cable'
    ]
  },
  {
    id: 'ann-2',
    category: 'KAS KELAS',
    date: 'Deadline 28 Feb',
    title: 'Iuran Pengadaan Roll Kabel UTP Cat6 & Konektor RJ-45',
    description: 'Dikelola oleh Bendahara Kelas untuk restock bahan praktik crimping intensif semester genap.',
    location: 'Ruang Teori TJKT 2',
    urgent: false,
    details: [
      'Nominal: Rp 20.000 / siswa',
      'Alokasi: Belden Cat6 305m & 2 Box RJ-45 AMP Original',
      'Penerima: Darryl & Nugi (Bendahara Kelas)'
    ]
  },
  {
    id: 'ann-3',
    category: 'KUNJUNGAN INDUSTRI',
    date: 'Bulan Depan',
    title: 'Observasi Tier-3 Data Center Telkom Indonesia',
    description: 'Surat persetujuan orang tua telah didistribusikan. Harap serahkan kembali ke Sekretaris Kelas.',
    location: 'Data Center NeuCentrIX Bandung',
    urgent: false,
    details: [
      'Target: Pengenalan Server Farm, Sistem Pendingin Precision AC, Genset Redundan N+1',
      'Dress code: Seragam Wearpack Praktik TJKT & Safety Shoes',
      'Transport: Bus Sekolah SMK Al-Amanah'
    ]
  }
];

export const SCHEDULE_TODAY: ScheduleItem[] = [
  {
    id: 'sch-1',
    time: '07:30 - 10:00',
    status: 'SELESAI',
    subject: 'Dasar-Dasar Kejuruan TJKT',
    topic: 'Topologi Bus, Ring, Star, & Arsitektur Hybrid Jaringan Kantor',
    teacher: 'Pak Budi Santoso, S.T.',
    room: 'Lab Jaringan 2'
  },
  {
    id: 'sch-2',
    time: '10:15 - 12:00',
    status: 'BERLANGSUNG',
    subject: 'Pemrograman Dasar & Logika Jaringan',
    topic: 'Automasi skrip bash dasar & dasar Python untuk pengujian ping otomatis',
    teacher: 'Bu Rina Anggraini, M.Kom.',
    room: 'Lab Komputer 1'
  },
  {
    id: 'sch-3',
    time: '13:00 - 15:15',
    status: 'MENDATANG',
    subject: 'Sistem Operasi Jaringan (Server Debian)',
    topic: 'Konfigurasi DHCP Server, IP Static Pool, dan Uji Konektivitas Klien',
    teacher: 'Pak Fajar Nugroho, S.Kom.',
    room: 'Server Room 2'
  }
];

export const PIKET_STUDENTS: DutyStudent[] = [
  { name: 'Farid', avatarChar: 'F', colorClass: 'bg-primary text-on-primary' },
  { name: 'Refal', avatarChar: 'R', colorClass: 'bg-secondary text-on-secondary' },
  { name: 'Nugi', avatarChar: 'N', colorClass: 'bg-tertiary text-on-tertiary' },
  { name: 'Wilsa', avatarChar: 'W', colorClass: 'bg-primary-container text-on-primary' },
  { name: 'Azzam', avatarChar: 'A', colorClass: 'bg-secondary-container text-on-secondary-container' },
  { name: 'Darryl', avatarChar: 'D', colorClass: 'bg-surface-container-highest text-on-surface' },
];

export const INITIAL_CHECKLIST: DutyChecklistItem[] = [
  { id: 'chk-1', label: 'Menyapu & mengepel area kelas teori', completed: true },
  { id: 'chk-2', label: 'Membersihkan Whiteboard & merapikan spidol', completed: true },
  { id: 'chk-3', label: 'Mematikan PC Klien, Router Lab & AC (15:15)', completed: false, timeNote: '15:15 WIB' },
  { id: 'chk-4', label: 'Mengunci pintu lab & menyerahkan kunci piket', completed: false }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    tag: 'LAB 101',
    category: 'Praktik Fisik Transmisi',
    title: 'Crimping & Testing Kabel UTP Straight / Cross',
    description: 'Standardisasi susunan kabel TIA/EIA 568A dan 568B dengan verifikasi kecepatan transmisi gigabit LAN tester dan toleransi 0% drop.',
    scoreOrMetric: 'Nilai Rata-rata: 92/100',
    date: 'September 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYncFt2CNCoC__0kE5eE7t-RDEbpYB9ntY3b4a_bkkNIi6SyKY2MmL55JVtBBKz0leci6NJxX4moLEwRmDQiwiyCkcDr3V_qpYcib0esdInP5S8Kz6h0BiQkYe3EOjg1W4Dl876UZv-J0sDh_ynLuhz-ePFBOQbcsvtOG5AxFIAzgni3a5AeSTFgzV4aFky71nD0BvxrkC2VJ3fzS056UigjY9Z-ZkEPGv2RJ981hjrNXC32RlqT94',
    alt: 'Indonesian vocational high school students in modern TJKT laboratory using crimping tool to assemble RJ-45 connectors onto blue UTP Cat6 cables',
    technologies: ['UTP Cat6', 'Konektor RJ-45', 'LAN Cable Tester', 'Crimping Plier Pro'],
    documentation: 'Praktik pengupasan jaket kabel, pemilinan pasangan kawat sesuai urutan warna EIA/TIA 568B (Putih Orange, Orange, Putih Hijau, Biru, Putih Biru, Hijau, Putih Cokelat, Cokelat) dengan uji kontinuitas LED 1-8 menyala berurutan tanpa silang pada pengujian straight-through.',
    downloadFilename: 'laporan-crimping-tia568b.pdf'
  },
  {
    id: 'proj-2',
    tag: 'SIMULASI',
    category: 'Arsitektur Jaringan',
    title: 'Simulasi Topologi Gedung Sekolah SMK Al-Amanah',
    description: 'Desain terstruktur 3 lantai dengan multi-VLAN terisolasi untuk Guru, Siswa, dan Staff Tata Usaha menggunakan inter-VLAN routing.',
    scoreOrMetric: 'Download .pkt Config',
    date: 'September 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfPR-HJZrWM7rgzfBntOmdBbedbb9LXqXirGMLEetKv4WmKbo5OKJag__yzKsi_lOSbonkRFYS66Zh98QA_g9GYht_qQ7yL1enl6N9rwIeo5yh9dkyuwkxmU5LudIq6MLyA_OQ7XFfVsCCn0z0nWGkParJ9CcbjfqevvHmQ-d57THKeNfWUFn2nsqnXRrdFtPugyQYkROPjZP_xaSE3E9rCUm51shHsVmYRbTX0BAYc6JmWtyml58y',
    alt: 'High tech computer lab screen displaying complex Cisco Packet Tracer network topology with multiple routers switches and cloud servers',
    technologies: ['Cisco Packet Tracer 8.2', '802.1Q Trunking', 'Router on a Stick', 'DHCP Relay'],
    documentation: 'Implementasi VLAN 10 (Administrasi / 192.168.10.0/24), VLAN 20 (Dewan Guru / 192.168.20.0/24), dan VLAN 30 (Laboratorium Siswa / 192.168.30.0/24) dengan Switch Core Catalyst 3650 dan gateway redundan HSRP.',
    downloadFilename: 'smk-alamanah-topology-v2.pkt'
  },
  {
    id: 'proj-3',
    tag: 'TERAPAN',
    category: 'Solusi Nyata',
    title: 'Hotspot Voucher MikroTik & Bandwidth Limiter',
    description: 'Penerapan User Manager MikroTik untuk sistem internet berbayar di kantin sekolah dengan sistem bandwidth limitasi Queue Tree per user.',
    scoreOrMetric: 'Live Deployed',
    date: 'September 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS4oTT5uSRJeCSyxSn8A-RJ0fqMXBVjZKtKbUsP05PrgsHeTvSisT_9gA4GzAhQNioulI2qtDdhFVnXmoKb2RSwPSqE6bbjCc9AwTmjrZ06RnUcprHzTGJ5qAKfNGj4WZhJ179E1zHHzVS-74hOgfBHRnN-iK_VIqCGpu6h_p3cjx1ApUpIkJhDinBa7c8tShWNwJ3cZ5VS1w5VMEcpRJ9K6mM4xDmaQkzKhiO23aVJFfAykgPMitk',
    alt: 'MikroTik RouterBOARD setup with glowing status LEDs connected to Wi-Fi access point antenna on student workstation desk',
    technologies: ['MikroTik RouterOS v7', 'User Manager', 'Queue Tree & PCQ', 'Captive Portal'],
    documentation: 'Sistem cetak voucher berkode QR acak dengan alokasi bandwidth 5 Mbps burst 10 Mbps per perangkat. Telah diuji pada 120 pengguna simultan di kantin sekolah tanpa saturasi uplink.',
    downloadFilename: 'mikrotik-hotspot-config.rsc'
  }
];

export const STUDENTS_LIST: StudentProfile[] = [
  { id: 1, nisn: '0078129001', name: 'Ahmad Fauzi', gender: 'L', specialty: 'MikroTik Routing', attendanceRate: 100, role: 'Ketua Kelas', status: 'Hadir', ipAddress: '192.168.10.11' },
  { id: 2, nisn: '0078129002', name: 'Refal Pratama', gender: 'L', specialty: 'Linux Server Admin', attendanceRate: 100, role: 'Wakil Ketua', status: 'Hadir', ipAddress: '192.168.10.12' },
  { id: 3, nisn: '0078129003', name: 'Darryl Al-Ghifari', gender: 'L', specialty: 'Cisco Routing & Switching', attendanceRate: 100, role: 'Bendahara 1', status: 'Hadir', ipAddress: '192.168.10.13' },
  { id: 4, nisn: '0078129004', name: 'Nugi Firmansyah', gender: 'L', specialty: 'Fiber Optic Splicing', attendanceRate: 100, role: 'Bendahara 2', status: 'Hadir', ipAddress: '192.168.10.14' },
  { id: 5, nisn: '0078129005', name: 'Wilsa Nurfadilah', gender: 'P', specialty: 'Network Security', attendanceRate: 100, role: 'Sekretaris 1', status: 'Hadir', ipAddress: '192.168.10.15' },
  { id: 6, nisn: '0078129006', name: 'Farid Maulana', gender: 'L', specialty: 'Subnetting & VLSM', attendanceRate: 100, role: 'Sie Praktikum', status: 'Hadir', ipAddress: '192.168.10.16' },
  { id: 7, nisn: '0078129007', name: 'Azzam Hidayat', gender: 'L', specialty: 'Wireless Enterprise', attendanceRate: 100, role: 'Sie Kebersihan', status: 'Hadir', ipAddress: '192.168.10.17' },
  { id: 8, nisn: '0078129008', name: 'Aditya Ramadhan', gender: 'L', specialty: 'MikroTik Firewall', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.18' },
  { id: 9, nisn: '0078129009', name: 'Anisa Rahmawati', gender: 'P', specialty: 'Debian DNS Bind9', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.19' },
  { id: 10, nisn: '0078129010', name: 'Bagas Satria', gender: 'L', specialty: 'Cisco VLAN Trunking', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.20' },
  { id: 11, nisn: '0078129011', name: 'Bima Arya Sakti', gender: 'L', specialty: 'FTTH Drop Core', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.21' },
  { id: 12, nisn: '0078129012', name: 'Cantika Dewi', gender: 'P', specialty: 'Nginx Web Server', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.22' },
  { id: 13, nisn: '0078129013', name: 'Daffa Raihan', gender: 'L', specialty: 'Wireshark Packet Analysis', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.23' },
  { id: 14, nisn: '0078129014', name: 'Dimas Kurniawan', gender: 'L', specialty: 'MikroTik Hotspot', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.24' },
  { id: 15, nisn: '0078129015', name: 'Fadhil Ihsan', gender: 'L', specialty: 'IPv6 Addressing', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.25' },
  { id: 16, nisn: '0078129016', name: 'Fikri Haikal', gender: 'L', specialty: 'Proxmox Virtualization', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.26' },
  { id: 17, nisn: '0078129017', name: 'Galih Permana', gender: 'L', specialty: 'OSPF Multi-Area', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.27' },
  { id: 18, nisn: '0078129018', name: 'Gita Larasati', gender: 'P', specialty: 'Network Topology Design', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.28' },
  { id: 19, nisn: '0078129019', name: 'Hafizh Nurrohman', gender: 'L', specialty: 'DHCP Pool & Option', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.29' },
  { id: 20, nisn: '0078129020', name: 'Ilham Syahputra', gender: 'L', specialty: 'Bash Script Automation', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.30' },
  { id: 21, nisn: '0078129021', name: 'Indra Lesmana', gender: 'L', specialty: 'MikroTik Bandwidth Limiter', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.31' },
  { id: 22, nisn: '0078129022', name: 'Kayla Putri', gender: 'P', specialty: 'Cisco Inter-VLAN', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.32' },
  { id: 23, nisn: '0078129023', name: 'Luthfi Hakim', gender: 'L', specialty: 'SSH Key Hardening', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.33' },
  { id: 24, nisn: '0078129024', name: 'Mahesa Danu', gender: 'L', specialty: 'Optical Power Meter Test', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.34' },
  { id: 25, nisn: '0078129025', name: 'Naufal Rizky', gender: 'L', specialty: 'MikroTik PPPoE Server', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.35' },
  { id: 26, nisn: '0078129026', name: 'Nayla Salsabila', gender: 'P', specialty: 'Linux FTP vsftpd', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.36' },
  { id: 27, nisn: '0078129027', name: 'Panji Gumilang', gender: 'L', specialty: 'Access Point Ubiquiti', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.37' },
  { id: 28, nisn: '0078129028', name: 'Raditya Putra', gender: 'L', specialty: 'Cisco NAT & PAT', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.38' },
  { id: 29, nisn: '0078129029', name: 'Rani Maharani', gender: 'P', specialty: 'Network Cable Standards', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.39' },
  { id: 30, nisn: '0078129030', name: 'Rendi Saputra', gender: 'L', specialty: 'MikroTik VPN L2TP', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.40' },
  { id: 31, nisn: '0078129031', name: 'Rizki Fadilah', gender: 'L', specialty: 'Debian Apache LAMP', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.41' },
  { id: 32, nisn: '0078129032', name: 'Salma Aulia', gender: 'P', specialty: 'IoT Sensor Gateway', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.42' },
  { id: 33, nisn: '0078129033', name: 'Satria Wicaksana', gender: 'L', specialty: 'Cisco Access Control List', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.43' },
  { id: 34, nisn: '0078129034', name: 'Tiara Anugrah', gender: 'P', specialty: 'VLAN Segmentation', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.44' },
  { id: 35, nisn: '0078129035', name: 'Yoga Pratama', gender: 'L', specialty: 'MikroTik Winbox Tuning', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.45' },
  { id: 36, nisn: '0078129036', name: 'Zahra Amelia', gender: 'P', specialty: 'Linux User & Permissions', attendanceRate: 100, status: 'Hadir', ipAddress: '192.168.10.46' }
];

export const LAB_MODULES: ModuleItem[] = [
  {
    id: 'mod-1',
    title: 'Modul Praktik 01: Pengkabelan UTP & Standar TIA/EIA 568B',
    category: 'Jaringan Dasar',
    level: 'Semester 1',
    pages: 28,
    fileSize: '4.2 MB',
    downloadUrl: '#'
  },
  {
    id: 'mod-2',
    title: 'Modul Praktik 02: Subnetting IPv4 CIDR /24 hingga /30',
    category: 'Alamat Jaringan',
    level: 'Semester 1',
    pages: 36,
    fileSize: '3.8 MB',
    downloadUrl: '#'
  },
  {
    id: 'mod-3',
    title: 'Modul Praktik 03: Konfigurasi MikroTik RouterOS Dasar (MTCNA Track)',
    category: 'Routing & Switching',
    level: 'Semester 2',
    pages: 52,
    fileSize: '7.5 MB',
    downloadUrl: '#'
  },
  {
    id: 'mod-4',
    title: 'Modul Praktik 04: Administrasi Server Debian 12 (DNS & DHCP)',
    category: 'Sistem Operasi',
    level: 'Semester 2',
    pages: 44,
    fileSize: '6.1 MB',
    downloadUrl: '#'
  },
  {
    id: 'mod-5',
    title: 'Modul Praktik 05: Simulasi Packet Tracer Multi-VLAN Inter-Switch',
    category: 'Simulasi Cisco',
    level: 'Semester 2',
    pages: 32,
    fileSize: '5.0 MB',
    downloadUrl: '#'
  }
];
