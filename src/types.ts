export interface Announcement {
  id: string;
  category: 'PRAKTIK KEJURUAN' | 'KAS KELAS' | 'KUNJUNGAN INDUSTRI';
  date: string;
  title: string;
  description: string;
  location?: string;
  urgent?: boolean;
  details?: string[];
}

export interface ScheduleItem {
  id: string;
  time: string;
  status: 'SELESAI' | 'BERLANGSUNG' | 'MENDATANG';
  subject: string;
  topic: string;
  teacher: string;
  room: string;
}

export interface DutyStudent {
  name: string;
  avatarChar: string;
  colorClass: string;
  role?: string;
}

export interface DutyChecklistItem {
  id: string;
  label: string;
  completed: boolean;
  timeNote?: string;
}

export interface StudentProfile {
  id: number;
  nisn: string;
  name: string;
  gender: 'L' | 'P';
  specialty: string;
  attendanceRate: number;
  role?: string;
  status: 'Hadir' | 'Izin' | 'Sakit';
  ipAddress: string;
}

export interface ProjectItem {
  id: string;
  tag: string;
  category: string;
  title: string;
  description: string;
  scoreOrMetric: string;
  date: string;
  image: string;
  alt: string;
  technologies: string[];
  documentation: string;
  downloadFilename?: string;
}

export interface ModuleItem {
  id: string;
  title: string;
  category: string;
  level: string;
  pages: number;
  fileSize: string;
  downloadUrl: string;
}
