import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, Sparkles, MapPin, ArrowUpRight, Download } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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
    confetti({ particleCount: 60, spread: 80, origin: { y: 0.7 } });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-28 px-6 bg-[#050507] border-t border-white/[0.06]">
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
        <div className="bento-card p-8 border border-white/[0.08] mb-16">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
            <div>
              <h3 className="text-base font-semibold text-white">M'envoyer un Message Direct</h3>
              <p className="text-xs text-zinc-500 mt-0.5">Réponse rapide assurée</p>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              <span>Casablanca, Maroc</span>
            </div>
          </div>

          {submitted ? (
            <div className="py-10 flex flex-col items-center text-center">
              <div className="h-10 w-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                <Check className="h-5 w-5" />
              </div>
              <h4 className="font-sans font-semibold text-white text-base">Message Transmis avec Succès</h4>
              <p className="text-xs text-zinc-400 mt-1 max-w-xs">
                Merci ! Votre demande a été enregistrée. Chouaib vous répondra dans les plus brefs délais.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                    Nom & Entreprise
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom ou société"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-600 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contact@entreprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-600 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                  Objet / Type d'Opportunité
                </label>
                <input
                  type="text"
                  placeholder="Ex : Offre de stage / Projet Full-Stack / Opportunité d'embauche"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-600 focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                  Votre Message
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Présentez votre besoin, les technologies de votre équipe ou les détails du poste..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-600 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="cursor-target shimmer-btn inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-semibold uppercase tracking-wider text-black mt-2"
              >
                <Send className="h-3.5 w-3.5" />
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
