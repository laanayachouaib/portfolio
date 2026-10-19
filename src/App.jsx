import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoMarquee from './components/LogoMarquee';
import AboutSection from './components/AboutSection';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import JarvisAssistant from './components/JarvisAssistant';
import TargetCursor from './components/TargetCursor';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0b0d] text-[#D7E2EA] font-kanit selection:bg-[#B600A8]/40 selection:text-white">
      {/* Cyberpunk Target Reticle Cursor */}
      <TargetCursor />

      {/* Global Futuristic Scanline & Grid Effect */}
      <div className="pointer-events-none fixed inset-0 z-0 cyber-grid opacity-40" />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 01: Hero Section */}
        <HeroSection />

        {/* 02: Infinite Tech Stack Marquee */}
        <LogoMarquee />

        {/* 03: About Me Section */}
        <AboutSection />

        {/* 04: Expertise & Services */}
        <ExpertiseSection />

        {/* 05: Flagship Projects */}
        <ProjectsSection />

        {/* 06: Contact & Footer */}
        <ContactSection />
      </main>

      {/* J.A.R.V.I.S Floating AI Guide */}
      <JarvisAssistant />
    </div>
  );
}
