import React from 'react';
import { GraduationCap, Award, MapPin, Briefcase, Languages, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 bg-[#050507] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
          {/* Left Column: Heading & Bio */}
          <div className="md:w-5/12">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">
              <span>// Parcours Académique & Pro</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white mb-6">
              Rigueur d'Ingénieur & Esprit d'Équipe.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-normal mb-6">
              Étudiant en cycle ingénieur informatique à l'Université Mundiapolis, je combine une solide formation théorique
              en modélisation logicielle (UML, Merise, Modèle en V) avec une expérience concrète acquise en milieu industriel
              (LEONI Wiring Systems) et en entreprise de services (Giga Manager).
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-4">
              <MapPin className="h-4 w-4 text-cyan-400" />
              <span>Casablanca, Maroc · Mobile nationalement & internationalement</span>
            </div>

            {/* Languages Badge Strip */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col gap-2">
              <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                <Languages className="h-3.5 w-3.5 text-cyan-400" />
                <span>Compétences Linguistiques</span>
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 font-mono">
                  Arabe : <strong className="text-white">Maternelle</strong>
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 font-mono">
                  Français : <strong className="text-white">Courant</strong>
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 font-mono">
                  Anglais : <strong className="text-white">Intermédiaire</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Cards */}
          <div className="md:w-7/12 flex flex-col gap-4">
            {/* Formation 1: Cycle Ingénieur */}
            <div className="bento-card p-6 border border-white/[0.08]">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider">
                      En cours · 2025 – 2027
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                      Cycle Ingénieur
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white mt-1 mb-0.5">
                    Diplôme d'Ingénieur en Informatique
                  </h3>
                  <span className="text-xs text-zinc-400 font-medium block mb-2">
                    Université Mundiapolis — Casablanca
                  </span>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Spécialisation avancée en génie logiciel, architectures distribuées, bases de données avancées,
                    sécurité et intelligence artificielle.
                  </p>
                </div>
              </div>
            </div>

            {/* Formation 2: Licence */}
            <div className="bento-card p-6 border border-white/[0.08]">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-300 shrink-0">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
                      2022 – 2025
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.08]">
                      Licence
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white mt-1 mb-0.5">
                    Licence en Informatique Appliquée
                  </h3>
                  <span className="text-xs text-zinc-400 font-medium block mb-2">
                    Université Mundiapolis — Option Développement Logiciel
                  </span>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Formation approfondie en algorithmique, développement web full-stack, modélisation UML/Merise,
                    conception de bases de données et gestion de projets.
                  </p>
                </div>
              </div>
            </div>

            {/* Expérience Clé LEONI */}
            <div className="bento-card p-6 border border-white/[0.08]">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider">
                      Février – Juin 2026
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                      Alternance
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white mt-1 mb-0.5">
                    Développeur Full-Stack · LEONI Wiring Systems
                  </h3>
                  <span className="text-xs text-zinc-400 font-medium block mb-2">
                    Berrechid — Supervision industrielle & suivi TRS en temps réel
                  </span>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Démarche en V complète pour 5 profils utilisateurs : React 19, TypeScript, PostgreSQL, Node.js,
                    Socket.IO, Recharts (Pareto, heatmaps) et export Excel.
                  </p>
                </div>
              </div>
            </div>

            {/* Certification AWS */}
            <div className="bento-card p-6 border border-white/[0.08]">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-amber-400 uppercase tracking-wider">
                      Certification Cloud
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">2020</span>
                  </div>
                  <h3 className="text-base font-semibold text-white mt-1 mb-0.5">
                    AWS Academy Cloud Foundations
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Fondations du Cloud Computing Amazon Web Services, infrastructure, sécurité et services managés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
