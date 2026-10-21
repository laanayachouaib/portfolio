import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoMarquee from './components/LogoMarquee';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import JarvisAssistant from './components/JarvisAssistant';
import TargetCursor from './components/TargetCursor';
import NeuralBackground from './components/NeuralBackground';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050507] text-[#EDEDED] font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Minimalist Dual-Ring Cursor */}
      <TargetCursor />

      {/* Global Interactive Neural Constellation Background */}
      <NeuralBackground className="pointer-events-none fixed inset-0 z-0 h-full w-full" />

      {/* Global Linear Grid Pattern */}
      <div className="pointer-events-none fixed inset-0 z-0 linear-grid opacity-30" />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 01: Hero Section */}
        <HeroSection />

        {/* 02: Tech Stack Logo Marquee */}
        <LogoMarquee />

        {/* 03: Technical Capabilities Bento Grid */}
        <ExpertiseSection />

        {/* 04: Selected Engineering Works */}
        <ProjectsSection />

        {/* 05: Academic & Professional Background */}
        <AboutSection />

        {/* 06: Contact & Direct Message */}
        <ContactSection />
      </main>

      {/* J.A.R.V.I.S Intelligence Assistant */}
      <JarvisAssistant />
    </div>
  );
}
