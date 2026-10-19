import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Terminal } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#0a0b0d]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 cursor-target text-white font-kanit font-black tracking-wider text-xl uppercase"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7621B0] to-[#B600A8] p-0.5 shadow-[0_0_15px_rgba(182,0,168,0.5)]">
            <div className="h-full w-full rounded-[6px] bg-[#0a0b0d] flex items-center justify-center font-mono font-black text-xs text-[#00F0FF]">
              MF
            </div>
          </div>
          <span className="hidden sm:inline-block font-extrabold tracking-tight text-white group-hover:text-[#D7E2EA] transition-colors">
            FAKIR<span className="text-[#B600A8]">.AI</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="cursor-target font-kanit text-sm lg:text-base font-medium uppercase tracking-wider text-[#D7E2EA]/75 hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7621B0] to-[#B600A8] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right Action: Status Pill & Contact CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>AVAILABLE FOR WORK</span>
          </div>

          <a
            href="#contact"
            className="cursor-target inline-flex items-center gap-2 rounded-xl px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:brightness-125 hover:shadow-[0_0_20px_rgba(182,0,168,0.5)]"
            style={{
              background: "linear-gradient(135deg, #7621B0 0%, #B600A8 100%)"
            }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            LET'S TALK
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/[0.05] border border-white/10 text-white"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0f1115]/95 backdrop-blur-2xl px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-kanit font-medium uppercase tracking-wider text-[#D7E2EA] hover:text-[#B600A8]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              AVAILABLE FOR ROLES & FREELANCE
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center rounded-xl py-3 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#7621B0] to-[#B600A8]"
            >
              LET'S TALK
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
