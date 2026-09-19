/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AnnouncementSection } from './components/AnnouncementSection';
import { ScheduleAndDutySection } from './components/ScheduleAndDutySection';
import { TeacherSection } from './components/TeacherSection';
import { SpecializationsSection } from './components/SpecializationsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

import { StudentsModal } from './components/StudentsModal';
import { PortalModal } from './components/PortalModal';
import { TerminalModal } from './components/TerminalModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ModuleDownloadModal } from './components/ModuleDownloadModal';
import { Toast } from './components/Toast';
import { ProjectItem } from './types';

export default function App() {
  const [activeNav, setActiveNav] = useState('beranda');
  const [studentsModalOpen, setStudentsModalOpen] = useState(false);
  const [portalModalOpen, setPortalModalOpen] = useState(false);
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [modulesModalOpen, setModulesModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] flex flex-col font-sans selection:bg-[#006194] selection:text-white">
      {/* Top Navbar */}
      <Header
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onOpenStudents={() => setStudentsModalOpen(true)}
        onOpenPortal={() => setPortalModalOpen(true)}
        onOpenTerminal={() => setTerminalModalOpen(true)}
        onOpenModules={() => setModulesModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section with Network Shield & Metrics */}
        <HeroSection
          onOpenStudents={() => setStudentsModalOpen(true)}
          onOpenTerminal={() => setTerminalModalOpen(true)}
          onOpenProjects={() => {
            const el = document.getElementById('galeri-proyek-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Real-time Announcements / Bulletin */}
        <AnnouncementSection />

        {/* Daily Schedule & Dynamic Duty SOP Checklist */}
        <ScheduleAndDutySection />

        {/* Homeroom Teacher Message & 4 Core Values */}
        <TeacherSection />

        {/* 4 Technical Specialization Tracks */}
        <SpecializationsSection />

        {/* Student Lab Real Practice Projects Gallery */}
        <ProjectsSection onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* Student Information System CTA */}
        <CtaSection
          onOpenPortal={() => setPortalModalOpen(true)}
          onOpenModules={() => setModulesModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerminal={() => setTerminalModalOpen(true)}
        onOpenModules={() => setModulesModalOpen(true)}
      />

      {/* Interactive Modals */}
      <StudentsModal
        isOpen={studentsModalOpen}
        onClose={() => setStudentsModalOpen(false)}
      />

      <PortalModal
        isOpen={portalModalOpen}
        onClose={() => setPortalModalOpen(false)}
      />

      <TerminalModal
        isOpen={terminalModalOpen}
        onClose={() => setTerminalModalOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onToast={showToast}
      />

      <ModuleDownloadModal
        isOpen={modulesModalOpen}
        onClose={() => setModulesModalOpen(false)}
        onToast={showToast}
      />

      {/* Feedback Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
