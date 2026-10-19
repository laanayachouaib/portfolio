import React, { useState } from 'react';
import NeuralBackground from './NeuralBackground';
import { Sparkles, ArrowDownRight, Compass, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
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
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden pt-24 pb-8 md:pb-12"
    >
      {/* Three.js Interactive Neural Constellation Background */}
      <NeuralBackground className="pointer-events-none absolute inset-0 h-full w-full opacity-80" />

      {/* Subtle Ambient Radial Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-b from-[#7621B0]/25 via-[#B600A8]/10 to-transparent blur-3xl" />

      {/* Top Tagline / Category chips */}
      <div className="relative z-10 mx-auto mt-6 flex flex-wrap items-center justify-center gap-3 px-6">
        <span className="flex items-center gap-1.5 rounded-full bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-[#D7E2EA]/90 border border-white/[0.08] backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00F0FF] animate-pulse"></span>
          Data Science & AI Engineer
        </span>
        <span className="hidden sm:flex items-center gap-1.5 rounded-full bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-[#D7E2EA]/90 border border-white/[0.08] backdrop-blur-md">
          Full Stack Architecture
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-[#D7E2EA]/90 border border-white/[0.08] backdrop-blur-md">
          Casablanca, MA
        </span>
      </div>

      {/* Main Giant Hero Title */}
      <div className="relative z-10 w-full overflow-hidden text-center my-auto">
        <h1
          className="hero-heading select-none w-full whitespace-nowrap text-center font-kanit font-black uppercase leading-none tracking-tight text-[12.5vw] sm:text-[13.5vw] md:text-[14.5vw] lg:text-[15.5vw]"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.y * 0.25}deg) rotateY(${tilt.x * 0.25}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          Hi, i'm fakir
        </h1>
      </div>

      {/* 3D Avatar Centerpiece with Glowing Orb & Mouse Parallax */}
      <div className="relative z-20 mx-auto -mt-16 sm:-mt-24 md:-mt-32 flex flex-col items-center justify-center">
        <div
          className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[440px] transition-transform duration-200 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.y * 0.8}deg) rotateY(${tilt.x * 0.8}deg) translateZ(30px)`,
          }}
        >
          {/* Animated Pulsing Neon Orb Behind Head */}
          <div
            className="orb-pulse absolute left-1/2 top-[45%] h-[75%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(182,0,168,0.55) 0%, rgba(118,33,176,0.35) 45%, transparent 72%)",
              filter: "blur(32px)",
            }}
          />

          {/* 3D Avatar Image with smooth radial falloff mask */}
          <img
            src="/head.png"
            alt="Mohammed Fakir — 3D avatar"
            className="relative w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter brightness-105"
            style={{
              WebkitMaskImage: "radial-gradient(52% 52% at 50% 50%, black 78%, transparent 100%)",
              maskImage: "radial-gradient(52% 52% at 50% 50%, black 78%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* Bottom Bar: Bio snippet + CTA button */}
      <div className="relative z-10 mt-auto flex flex-col sm:flex-row items-center justify-between gap-6 px-6 sm:px-12 max-w-7xl mx-auto w-full">
        {/* Left Bio Tagline */}
        <p
          className="max-w-[280px] sm:max-w-[320px] md:max-w-[360px] font-kanit font-light uppercase leading-snug tracking-wide text-[#D7E2EA] text-center sm:text-left text-xs sm:text-sm md:text-base opacity-90"
        >
          A data scientist & full stack developer crafting intelligent, unforgettable products
        </p>

        {/* Action Button: Contact Me */}
        <div className="flex items-center gap-4">
          <a
            href="#projects"
            className="cursor-target hidden lg:inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#D7E2EA] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all duration-300 hover:border-white/20"
          >
            <Compass className="h-4 w-4 text-[#00F0FF]" />
            Explore Projects
          </a>

          <a
            href="#contact"
            className="cursor-target inline-flex items-center gap-2.5 rounded-xl px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:brightness-125 hover:shadow-[0_0_35px_rgba(182,0,168,0.65)] hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(123deg, #7621B0 0%, #B600A8 100%)",
              boxShadow: "0 10px 30px -5px rgba(182, 0, 168, 0.4)"
            }}
          >
            <span>Contact Me</span>
            <ArrowDownRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
