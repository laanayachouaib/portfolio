import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Download, Sparkles, Terminal, MapPin, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function HeroSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex flex-col justify-center items-center px-6 pt-32 pb-16 overflow-hidden"
    >
      {/* Ambient Top Spotlight */}
      <div className="pointer-events-none absolute inset-0 ambient-spotlight" />

      {/* Grid Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 linear-grid opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Top Announcement Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-8 hover:border-white/20 transition-all duration-300">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400"></span>
          <span className="font-mono text-xs text-zinc-300 tracking-wide">
            Élève Ingénieur Informatique · Université Mundiapolis
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="hero-title-animated text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight leading-[1.08] mb-6">
          <span className="title-name-gradient">
            Chouaib LAANAYA
          </span>
          <br />
          <span className="title-subtitle-gradient text-3xl sm:text-5xl md:text-6xl mt-2 block sm:inline">
            Ingénieur Logiciel Full-Stack & Systèmes IA
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed mb-10 font-normal">
          Je conçois des applications web et mobiles complètes, robustes et orientées performance —
          de la modélisation <span className="text-white font-medium">UML / Merise</span> et des architectures{' '}
          <span className="text-cyan-400 font-medium">React 19, TypeScript & Node.js</span> aux tableaux de bord industriels
          en temps réel et l'intégration de modèles d'IA en local (<span className="text-emerald-400 font-medium">Ollama</span>).
        </p>

        {/* Action Button Row */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-16">
          <a
            href="#projects"
            className="cursor-target shimmer-btn inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider"
          >
            <span>Voir mes réalisations</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="/CV_Laanaya_Chouaib.pdf"
            download="CV_Laanaya_Chouaib.pdf"
            className="cursor-target inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-zinc-200 text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 backdrop-blur-sm"
          >
            <Download className="h-4 w-4 text-cyan-400" />
            <span>Télécharger mon CV</span>
          </a>

          <a
            href="https://github.com/laanayachouaib"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target inline-flex items-center gap-2 p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-zinc-300 transition-all duration-200"
            title="GitHub Chouaib Laanaya"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>

        {/* 3D Avatar Centerpiece with Subtle Floating Ring */}
        <div className="relative mb-12">
          <div className="avatar-float-wrapper">
            <div className="avatar-backlight" />
            <div className="avatar-tech-ring-1" />
            <div className="avatar-tech-ring-2" />

            <div
              className="relative w-[180px] sm:w-[220px] md:w-[250px] transition-transform duration-300 ease-out z-10"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.y * 0.6}deg) rotateY(${tilt.x * 0.6}deg)`,
              }}
            >
              <img
                src="/e889c03e-d4ff-4943-b903-46e64fb613f1.png"
                alt="Chouaib Laanaya"
                className="avatar-img-styled cursor-target relative w-full drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] filter brightness-105"
                style={{
                  WebkitMaskImage: "radial-gradient(54% 54% at 50% 50%, black 78%, transparent 100%)",
                  maskImage: "radial-gradient(54% 54% at 50% 50%, black 78%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Minimalist Specs Metric Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-8 border-t border-white/[0.08] w-full max-w-3xl">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-1">Formation</span>
            <span className="font-sans font-semibold text-sm text-zinc-200">Cycle Ingénieur</span>
            <span className="text-[11px] text-zinc-500">Mundiapolis (2025–2027)</span>
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-1">Expérience Clé</span>
            <span className="font-sans font-semibold text-sm text-zinc-200">LEONI Wiring Systems</span>
            <span className="text-[11px] text-zinc-500">Performance Industrielle</span>
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-1">Technologies</span>
            <span className="font-sans font-semibold text-sm text-zinc-200">Full-Stack & IA</span>
            <span className="text-[11px] text-zinc-500">React 19 · Node · Ollama</span>
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-1">Localisation</span>
            <span className="font-sans font-semibold text-sm text-zinc-200">Casablanca</span>
            <span className="text-[11px] text-zinc-500">Mobile & Disponible</span>
          </div>
        </div>
      </div>
    </section>
  );
}
