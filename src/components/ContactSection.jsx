import React, { useState, useRef } from 'react';
import { Mail, Phone, Copy, Check, Send, Sparkles, MapPin, ArrowUpRight, Download, User, Tag, MessageSquare, Cpu } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

const AVAILABLE_TECHS = [
  { name: 'React 19', icon: '/react/react-original.svg' },
  { name: 'TypeScript', icon: '/typescript/typescript-original.svg' },
  { name: 'Node.js', icon: '/nodejs/nodejs-original.svg' },
  { name: 'Spring Boot', icon: '/java/java-original.svg' },
  { name: 'Python', icon: '/python/python-original.svg' },
  { name: 'PostgreSQL', icon: '/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { name: 'MySQL', icon: '/mysql/mysql-original.svg' },
  { name: 'Docker', icon: '/docker/docker-original.svg' },
  { name: 'Git', icon: '/git/git-original.svg' },
  { name: 'Ollama (LLMs)', icon: '/jupyter/jupyter-original.svg' },
  { name: 'Flutter', icon: '/flutter/flutter-original.svg' },
  { name: 'Power BI', icon: '/scikitlearn/scikitlearn-original.svg' },
];

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const toggleTech = (techName) => {
    setSelectedTechs((prev) =>
      prev.includes(techName) ? prev.filter((t) => t !== techName) : [...prev, techName]
    );
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('laanayachouaib@gmail.com');
    setCopiedEmail(true);
    confetti({ particleCount: 35, spread: 60, origin: { y: 0.85 } });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('+212635313101');
    setCopiedPhone(true);
    confetti({ particleCount: 35, spread: 60, origin: { y: 0.85 } });
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 75, spread: 85, origin: { y: 0.7 } });
    setTimeout(() => confetti({ particleCount: 45, angle: 60, spread: 55, origin: { x: 0 } }), 200);
    setTimeout(() => confetti({ particleCount: 45, angle: 120, spread: 55, origin: { x: 1 } }), 400);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSelectedTechs([]);
    }, 4500);
  };

  return (
    <section id="contact" className="relative py-28 px-6 bg-transparent border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">
            <span>// Contact & Opportunités</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-white mb-4">
            Construisons Ensemble Votre Prochain Projet.
          </h2>
          <p className="max-w-lg text-sm text-zinc-400 font-normal leading-relaxed">
            Actuellement à la recherche d'un stage en ingénierie logicielle / développement Full-Stack & IA,
            ouvert aux projets ambitieux et collaborations techniques.
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {/* Email button with Copy */}
          <button
            onClick={handleCopyEmail}
            className="bento-card p-4 flex items-center justify-between group cursor-target text-left"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] text-cyan-400 border border-white/[0.08]">
                <Mail className="h-4 w-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Email</span>
                <span className="text-xs font-mono font-medium text-zinc-200 truncate">laanayachouaib@gmail.com</span>
              </div>
            </div>
            {copiedEmail ? (
              <Check className="h-4 w-4 text-emerald-400 shrink-0 ml-1" />
            ) : (
              <Copy className="h-3.5 w-3.5 text-zinc-600 group-hover:text-zinc-300 transition-colors shrink-0 ml-1" />
            )}
          </button>

          {/* Phone button with Copy */}
          <button
            onClick={handleCopyPhone}
            className="bento-card p-4 flex items-center justify-between group cursor-target text-left"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] text-emerald-400 border border-white/[0.08]">
                <Phone className="h-4 w-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Téléphone</span>
                <span className="text-xs font-mono font-medium text-zinc-200 truncate">+212 635 313 101</span>
              </div>
            </div>
            {copiedPhone ? (
              <Check className="h-4 w-4 text-emerald-400 shrink-0 ml-1" />
            ) : (
              <Copy className="h-3.5 w-3.5 text-zinc-600 group-hover:text-zinc-300 transition-colors shrink-0 ml-1" />
            )}
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/laanayachouaib"
            target="_blank"
            rel="noopener noreferrer"
            className="bento-card p-4 flex items-center justify-between group cursor-target"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] text-zinc-200 border border-white/[0.08]">
                <GithubIcon className="h-4 w-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-mono text-zinc-500 uppercase">GitHub</span>
                <span className="text-xs font-mono font-medium text-zinc-200 truncate">@laanayachouaib</span>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-zinc-300 transition-colors shrink-0" />
          </a>

          {/* Download CV */}
          <a
            href="/CV_Laanaya_Chouaib.pdf"
            download="CV_Laanaya_Chouaib.pdf"
            className="bento-card p-4 flex items-center justify-between group cursor-target bg-cyan-500/[0.03] border-cyan-500/20 hover:border-cyan-500/40"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                <Download className="h-4 w-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">Curriculum Vitae</span>
                <span className="text-xs font-mono font-medium text-white truncate">Télécharger (PDF)</span>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-cyan-400 shrink-0" />
          </a>
        </div>

        {/* Message Card */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="bento-card form-glow-card p-6 sm:p-9 border border-white/[0.08] mb-16 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/[0.06]">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                <Send className="h-4 w-4 text-cyan-400" />
                <span>M'envoyer un Message Direct</span>
              </h3>
              <p className="text-xs text-zinc-400 mt-1">Réponse rapide assurée sous 24 heures</p>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Casablanca, Maroc</span>
            </div>
          </div>

          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                <Check className="h-7 w-7" />
              </div>
              <h4 className="font-sans font-bold text-white text-lg sm:text-xl">Message Transmis avec Succès !</h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-md leading-relaxed">
                Merci ! Votre demande a été enregistrée avec succès. Chouaib LAANAYA vous répondra dans les plus brefs délais.
              </p>
              {selectedTechs.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2 justify-center max-w-sm">
                  {selectedTechs.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-input-wrapper flex flex-col">
                  <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2 transition-colors">
                    <User className="form-icon h-3.5 w-3.5 text-zinc-500 transition-all" />
                    <span>Nom & Entreprise <span className="text-cyan-400">*</span></span>
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                    <input
                      type="text"
                      required
                      placeholder="Votre nom ou société"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input w-full rounded-xl bg-white/[0.03] border border-white/[0.08] pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:border-cyan-400 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>
                </div>

                <div className="form-input-wrapper flex flex-col">
                  <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2 transition-colors">
                    <Mail className="form-icon h-3.5 w-3.5 text-zinc-500 transition-all" />
                    <span>Adresse Email <span className="text-cyan-400">*</span></span>
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                    <input
                      type="email"
                      required
                      placeholder="contact@entreprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input w-full rounded-xl bg-white/[0.03] border border-white/[0.08] pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:border-cyan-400 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Technologies Badges Section with Icons */}
              <div className="form-input-wrapper flex flex-col pt-1">
                <div className="flex items-center justify-between mb-2.5">
                  <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    <Cpu className="form-icon h-3.5 w-3.5 text-cyan-400" />
                    <span>Technologies Concernées par votre Besoin</span>
                  </label>
                  <span className="text-[10px] font-mono text-zinc-500 hidden sm:inline-block">Cliquez pour sélectionner</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-0.5">
                  {AVAILABLE_TECHS.map((tech) => {
                    const isSelected = selectedTechs.includes(tech.name);
                    return (
                      <button
                        key={tech.name}
                        type="button"
                        onClick={() => toggleTech(tech.name)}
                        className={`cursor-target group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border font-mono text-xs transition-all duration-200 select-none ${
                          isSelected
                            ? 'border-cyan-400 bg-cyan-500/15 text-cyan-200 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                            : 'border-white/[0.08] bg-white/[0.03] text-zinc-300 hover:border-cyan-500/40 hover:bg-white/[0.08]'
                        }`}
                      >
                        <img src={tech.icon} alt={tech.name} className="h-4 w-4 object-contain group-hover:scale-110 transition-transform" />
                        <span>{tech.name}</span>
                        {isSelected && <span className="text-[11px] font-bold text-cyan-400">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="form-input-wrapper flex flex-col">
                <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2 transition-colors">
                  <Tag className="form-icon h-3.5 w-3.5 text-zinc-500 transition-all" />
                  <span>Objet / Type d'Opportunité</span>
                </label>
                <div className="relative">
                  <Tag className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <input
                    type="text"
                    placeholder="Ex : Offre de stage / Projet Full-Stack / Mission IA Locale"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input w-full rounded-xl bg-white/[0.03] border border-white/[0.08] pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:border-cyan-400 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="form-input-wrapper flex flex-col">
                <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2 transition-colors">
                  <MessageSquare className="form-icon h-3.5 w-3.5 text-zinc-500 transition-all" />
                  <span>Votre Message <span className="text-cyan-400">*</span></span>
                </label>
                <div className="relative">
                  <MessageSquare className="pointer-events-none absolute left-3.5 top-4 h-4 w-4 text-zinc-500" />
                  <textarea
                    rows="4"
                    required
                    placeholder="Présentez votre besoin, les technologies de votre équipe ou les détails du poste..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input w-full rounded-xl bg-white/[0.03] border border-white/[0.08] pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:border-cyan-400 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="cursor-target shimmer-btn group relative overflow-hidden inline-flex items-center justify-center gap-2.5 py-3.5 px-7 text-xs font-semibold uppercase tracking-wider text-black mt-2 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(0,240,255,0.45)] transition-all duration-300"
              >
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span>Envoyer le Message</span>
              </button>
            </form>
          )}
        </div>

        {/* Minimal Footer */}
        <footer className="text-center font-mono text-[11px] text-zinc-600">
          Développé par Chouaib LAANAYA · Casablanca, Maroc · © {new Date().getFullYear()}
        </footer>
      </div>
    </section>
  );
}
