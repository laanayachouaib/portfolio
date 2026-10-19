import React, { useState } from 'react';
import NeuralBackground from './NeuralBackground';
import { ArrowRight, ArrowUpRight, Sparkles, Terminal, MapPin, CheckCircle2 } from 'lucide-react';
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
      {/* Linear Ambient Top Spotlight */}
      <div className="pointer-events-none absolute inset-0 ambient-spotlight" />
      
      {/* Three.js Neural Constellation Background */}
      <NeuralBackground className="pointer-events-none absolute inset-0 h-full w-full opacity-60" />

      {/* Subtle Grid Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 linear-grid opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Top Announcement Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-8 hover:border-white/20 transition-all duration-300">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400"></span>
          <span className="font-mono text-xs text-zinc-300 tracking-wide">
            Data Science & AI Systems · Full Stack Architecture
          </span>
        </div>

        {/* Hero Title with Metallic Silver Gradient */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight leading-[1.08] mb-6 text-gradient-silver">
          Engineering Intelligence.
          <br />
          <span className="text-zinc-400 font-normal">From Model to Production.</span>
        </h1>

        {/* Crisp Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed mb-10 font-normal">
          I am <span className="text-white font-medium">Mohammed Fakir</span> — bridging deep learning,
          generative AI pipelines (LLMs/RAG) and high-throughput data engineering with polished full-stack web products.
        </p>

        {/* Action Button Row */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-16">
          <a
            href="#projects"
            className="cursor-target shimmer-btn inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider"
          >
            <span>Explore Projects</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="cursor-target inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-zinc-200 text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 backdrop-blur-sm"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="h-4 w-4 text-zinc-400" />
          </a>

          <a
            href="https://github.com/Symooomzip"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target inline-flex items-center gap-2 p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-zinc-300 transition-all duration-200"
            title="GitHub Profile"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>

        {/* 3D Avatar Centerpiece with Subtle Floating Ring */}
        <div className="relative mb-12">
          <div
            className="relative w-[180px] sm:w-[220px] md:w-[250px] transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.y * 0.6}deg) rotateY(${tilt.x * 0.6}deg)`,
            }}
          >
            {/* Subtle Cyan Diffused Ambient Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/15 blur-2xl -z-10" />

            <img
              src="/head.png"
              alt="Mohammed Fakir"
              className="relative w-full drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] filter brightness-105"
              style={{
                WebkitMaskImage: "radial-gradient(54% 54% at 50% 50%, black 78%, transparent 100%)",
                maskImage: "radial-gradient(54% 54% at 50% 50%, black 78%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* Minimalist Specs Metric Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-8 border-t border-white/[0.08] w-full max-w-3xl">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-1">Education</span>
            <span className="font-sans font-semibold text-sm text-zinc-200">Master in AI</span>
            <span className="text-[11px] text-zinc-500">Data Science & ML</span>
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-1">Production</span>
            <span className="font-sans font-semibold text-sm text-zinc-200">04+ Systems</span>
            <span className="text-[11px] text-zinc-500">RAG, CV, CLV, BI</span>
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-1">Stack</span>
            <span className="font-sans font-semibold text-sm text-zinc-200">End-to-End</span>
            <span className="text-[11px] text-zinc-500">Python · React · .NET</span>
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-1">Location</span>
            <span className="font-sans font-semibold text-sm text-zinc-200">Casablanca</span>
            <span className="text-[11px] text-zinc-500">Remote & Hybrid</span>
          </div>
        </div>
      </div>
    </section>
  );
}
