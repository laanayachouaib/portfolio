import React, { useState } from 'react';
import { ExternalLink, Eye, Lock, ChevronRight, X, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const PROJECTS = [
  {
    num: "01",
    name: "Dashboard de Performance Industrielle",
    category: "Système Industriel Temps Réel · LEONI Wiring Systems",
    href: "https://github.com/laanayachouaib",
    specs: [
      { label: "ENTREPRISE", value: "LEONI Wiring Systems (Berrechid)" },
      { label: "MÉTHODOLOGIE", value: "Cycle en V (5 profils métiers)" }
    ],
    chips: ["React 19", "TypeScript", "Node.js", "Express", "PostgreSQL", "Socket.IO", "Zustand", "Recharts"],
    metric: { display: "5 Profils", label: "Modules Métiers Opérationnels", badge: "Temps Réel WebSocket" },
    instrumentTag: "Console de Supervision Usine LEONI",
    screenshots: [
      { src: "/leoni/image19.png", alt: "Tableau de bord principal — KPIs industriels et calcul du TRS" },
      { src: "/leoni/image30.png", alt: "Analyse des arrêts machines — Diagramme de Pareto" },
      { src: "/leoni/image29.png", alt: "Heatmaps d'activité de production et suivi des opérateurs" },
      { src: "/leoni/image32.png", alt: "Gestion des stocks de câblage et alertes temps réel" }
    ],
    description: "Conception et développement complet d'un tableau de bord industriel en démarche en V. Intègre la visualisation des KPIs en temps réel via Socket.IO, l'analyse des pannes par diagramme de Pareto, le suivi de la production, la paie des opérateurs, les stocks de câblage et l'exportation de rapports Excel."
  },
  {
    num: "02",
    name: "Plateforme de Gestion Hôtelière",
    category: "Application Web Full-Stack · GIGA MANAGER",
    href: "https://github.com/laanayachouaib",
    specs: [
      { label: "ENTREPRISE", value: "GIGA MANAGER (Béni Mellal)" },
      { label: "ARCHITECTURE", value: "MCD/MLD Merise · UML · MVC" }
    ],
    chips: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML5/CSS3", "JWT", "phpMyAdmin"],
    metric: { display: "100%", label: "Digitalisation des Réservations", badge: "Planning Interactif" },
    instrumentTag: "Console de Gestion Hôtelière & Facturation",
    screenshots: [
      { src: "/hotel/hotel_screen_6.png", alt: "Planning dynamique des réservations et calendrier des chambres" },
      { src: "/hotel/hotel_screen_13.png", alt: "Interface d'enregistrement des clients (check-in / check-out)" },
      { src: "/hotel/hotel_screen_5.png", alt: "Catalogue des chambres et gestion des tarifs" },
      { src: "/hotel/hotel_screen_10.png", alt: "Tableau de bord du taux d'occupation et des revenus mensuels" }
    ],
    description: "Solution web de gestion d'établissement hôtelier pour administrateurs et réceptionnistes. Gestion centralisée des chambres, calendrier dynamique de réservation, formalités de check-in/check-out, facturation des séjours et indicateurs de rentabilité mensuelle."
  },
  {
    num: "03",
    name: "Système de Gestion de Stock & Logistique",
    category: "Application Web de Gestion · AgriSani",
    href: "https://github.com/laanayachouaib",
    specs: [
      { label: "ENTREPRISE", value: "AgriSani (Berrechid)" },
      { label: "OBJECTIF", value: "Traçabilité des Flux de Stock" }
    ],
    chips: ["Web Full-Stack", "PHP", "MySQL", "JavaScript", "Responsive UI", "GanttProject"],
    metric: { display: "0 Rupture", label: "Suivi des Niveaux de Stock", badge: "Alertes Seuil" },
    instrumentTag: "Console de Traçabilité & Inventaire",
    screenshots: [
      { src: "/hotel/hotel_screen_1.png", alt: "Interface moderne de gestion de stock agricole" },
      { src: "/hotel/hotel_screen_12.png", alt: "Console d'administration des mouvements de stocks" },
      { src: "/hotel/hotel_screen_7.png", alt: "Historique et rapports des entrées et sorties" }
    ],
    description: "Conception et déploiement d'une application web ergonomique pour le contrôle des stocks agricoles, assurant la traçabilité intégrale des mouvements d'entrées/sorties et l'alerte proactive en cas de franchissement de stock critique."
  },
  {
    num: "04",
    name: "Inférence IA Locale & LLMs d'Entreprise",
    category: "Intelligence Artificielle Locale · Ollama",
    href: "https://github.com/laanayachouaib",
    specs: [
      { label: "MOTEUR", value: "Ollama Local Runtime" },
      { label: "CONFIDENTIALITÉ", value: "100% Inférence Souveraine Hors-Ligne" }
    ],
    chips: ["Python", "Ollama", "LLMs", "REST API", "Docker", "Prompt Engineering"],
    metric: { display: "0 Cloud", label: "Données Strictement Locales", badge: "Confidentialité Totale" },
    instrumentTag: "Architecture d'Orchestration d'IA Locale",
    screenshots: [
      { src: "/leoni/image34.png", alt: "Interface d'automatisation et requêtes d'assistance intelligente" },
      { src: "/leoni/image35.png", alt: "Flux d'analyse et intégration locale" }
    ],
    description: "Mise en œuvre d'assistants intelligents exécutant des modèles de langage de pointe en local avec Ollama. Automatisation des tâches analytiques et traitement de documents sans aucune dépendance envers des serveurs tiers ou cloud payant."
  }
];

export default function ProjectsSection() {
  const [activeScreenshots, setActiveScreenshots] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
  const [modalImage, setModalImage] = useState(null);

  const handleSelectScreenshot = (projectIdx, screenshotIdx) => {
    setActiveScreenshots((prev) => ({ ...prev, [projectIdx]: screenshotIdx }));
  };

  return (
    <section id="projects" className="relative py-28 px-6 bg-[#050507]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">
              <span>// Réalisations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-white">
              Projets Concrets
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-400 font-normal leading-relaxed">
            Applications industrielles et systèmes de gestion développés en entreprise, avec captures d'écran authentiques et indicateurs réels.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-12">
          {PROJECTS.map((project, pIdx) => {
            const activeIdx = activeScreenshots[pIdx] || 0;
            const currentImg = project.screenshots[activeIdx] || project.screenshots[0];

            return (
              <div
                key={project.num}
                className="bento-card overflow-hidden p-6 sm:p-10 border border-white/[0.08]"
              >
                {/* Header bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.06]">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm text-zinc-500 font-bold">
                      {project.num}
                    </span>
                    <div>
                      <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider block">
                        {project.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-xs font-mono text-zinc-300 transition-all"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>Code & Dépôt</span>
                      <ExternalLink className="h-3 w-3 text-zinc-500" />
                    </a>
                  </div>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Interactive Screenshot Console */}
                  <div className="lg:col-span-7 flex flex-col gap-3">
                    <div
                      onClick={() => setModalImage(currentImg)}
                      className="group/img relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-black/70 border border-white/10 cursor-pointer shadow-xl"
                    >
                      <img
                        src={currentImg.src}
                        alt={currentImg.alt}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/img:scale-102"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 font-mono text-[10px] text-cyan-300 uppercase">
                          {project.instrumentTag}
                        </span>
                        <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 font-mono text-[10px] text-zinc-400">
                          <Eye className="h-3 w-3" />
                          <span>Agrandir</span>
                        </div>
                      </div>
                    </div>

                    {/* Screenshot Thumbnails */}
                    <div className="grid grid-cols-4 gap-2">
                      {project.screenshots.map((s, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => handleSelectScreenshot(pIdx, sIdx)}
                          className={`relative aspect-[16/10] overflow-hidden rounded-md border transition-all duration-200 ${
                            activeIdx === sIdx
                              ? 'border-cyan-400 ring-1 ring-cyan-400/50 opacity-100'
                              : 'border-white/10 opacity-40 hover:opacity-80'
                          }`}
                        >
                          <img src={s.src} alt={s.alt} className="h-full w-full object-cover object-top" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Specs & Description */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full gap-5">
                    <p className="text-sm text-zinc-300 font-normal leading-relaxed">
                      {project.description}
                    </p>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      {project.specs.map((spec, spIdx) => (
                        <div key={spIdx} className="flex flex-col">
                          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                            {spec.label}
                          </span>
                          <span className="font-mono text-xs text-zinc-200 font-medium truncate">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Key Metric Badge */}
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <span className="font-sans font-extrabold text-2xl sm:text-3xl text-white text-gradient-silver">
                        {project.metric.display}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-zinc-200">
                          {project.metric.label}
                        </span>
                        <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wide">
                          {project.metric.badge}
                        </span>
                      </div>
                    </div>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.chips.map((chip, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-zinc-400 border border-white/[0.06]"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub link button */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/laanayachouaib"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-xs font-mono font-medium text-zinc-300 transition-all duration-200"
          >
            <GithubIcon className="h-4 w-4 text-zinc-400" />
            <span>Consulter mes projets sur GitHub (@laanayachouaib)</span>
            <ExternalLink className="h-3.5 w-3.5 text-zinc-500" />
          </a>
        </div>
      </div>

      {/* Modal Zoom */}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out"
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-xl border border-white/20">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/80 p-2 text-white hover:bg-black transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={modalImage.src}
              alt={modalImage.alt}
              className="max-h-[85vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
