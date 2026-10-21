import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download, FileText, Sun, Moon } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Compétences', href: '#expertise' },
  { label: 'Projets', href: '#projects' },
  { label: 'Parcours', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    document.body.classList.toggle('light-mode', nextTheme === 'light');
    if (window.onPortfolioThemeChange) {
      window.onPortfolioThemeChange(nextTheme);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#050507]/85 backdrop-blur-xl border-b border-white/[0.08]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="#"
          className="group flex items-center gap-2.5 cursor-target text-white font-sans font-bold tracking-tight text-base"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 text-black font-mono font-extrabold text-xs shadow-sm">
            CL
          </span>
          <span className="text-zinc-200 group-hover:text-white transition-colors">
            Chouaib LAANAYA
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-zinc-500">
            / Élève Ingénieur
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="cursor-target px-4 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Status & Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
            </span>
            <span>En recherche de stage</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="cursor-target flex items-center justify-center h-8 w-8 rounded-full bg-white/[0.06] hover:bg-white/[0.14] text-zinc-200 border border-white/10 hover:border-cyan-400/50 transition-all duration-200 hover:scale-105 active:scale-95"
            title="Basculer Mode Clair / Sombre"
            aria-label="Basculer Mode Clair / Sombre"
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4 text-indigo-400" />
            ) : (
              <Sun className="h-4 w-4 text-amber-400" />
            )}
          </button>

          <a
            href="/CV_Laanaya_Chouaib.pdf"
            download="CV_Laanaya_Chouaib.pdf"
            className="cursor-target flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium bg-white/[0.06] hover:bg-white/[0.12] text-zinc-200 border border-white/10 transition-all duration-200"
          >
            <Download className="h-3.5 w-3.5 text-cyan-400" />
            <span>CV</span>
          </a>

          <a
            href="#contact"
            className="cursor-target flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium bg-white text-black hover:bg-zinc-200 transition-all duration-200 shadow-sm"
          >
            <span>Me contacter</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/[0.04] border border-white/10 text-white"
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#08090C]/95 backdrop-blur-2xl px-6 py-6 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-300 hover:text-white py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="/CV_Laanaya_Chouaib.pdf"
              download="CV_Laanaya_Chouaib.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-medium bg-white/[0.06] text-white border border-white/10"
            >
              <Download className="h-4 w-4 text-cyan-400" />
              <span>Télécharger mon CV (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center rounded-xl py-2.5 text-xs font-semibold bg-white text-black"
            >
              Me contacter
            </a>
          </div>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400">Mode d'affichage</span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] text-xs font-medium text-zinc-200 border border-white/10 hover:border-cyan-400/40 transition-colors"
            >
              {theme === 'light' ? (
                <>
                  <Moon className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Mode Sombre</span>
                </>
              ) : (
                <>
                  <Sun className="h-3.5 w-3.5 text-amber-400" />
                  <span>Mode Clair</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
