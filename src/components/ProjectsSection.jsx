import React, { useState, useEffect } from 'react';
import { ExternalLink, Eye, X, CheckCircle2, Layers, Sparkles, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const PROJECTS = [
  {
    num: "01",
    name: "Dashboard de Performance Industrielle",
    category: "Système Industriel Temps Réel · LEONI Wiring Systems",
    href: "https://github.com/laanayachouaib",
    windowHost: "leoni-supervision.factory.internal",
    specs: [
      { label: "ENTREPRISE", value: "LEONI Wiring Systems (Berrechid)" },
      { label: "MÉTHODOLOGIE", value: "Cycle en V · 5 Profils Métiers" }
    ],
    chips: ["React 19", "TypeScript", "Node.js", "Express", "PostgreSQL", "Socket.IO", "Zustand", "Recharts"],
    metric: { display: "94.2%", label: "Taux de Production Moyen", badge: "Temps Réel WebSocket" },
    instrumentTag: "Console Usine LEONI · Production & Lignes",
    screenshots: [
      {
        src: "/leoni/image29.png",
        title: "Tableau de Bord Principal",
        alt: "Tableau de Bord Principal — KPIs industriels temps réel (OEE 88.5%, Taux de Qualité 97.8%, Temps d'arrêt 42m) et état des machines"
      },
      {
        src: "/leoni/image30.png",
        title: "Supervision des Machines CNC",
        alt: "Supervision des Machines — Monitoring opérationnel des équipements CNC, rendements et alertes de maintenance de l'atelier"
      },
      {
        src: "/leoni/image31.png",
        title: "Contrôle Qualité & Pareto",
        alt: "Analyse des Défauts Qualité — Diagramme de Pareto 80/20 (sertissage, isolant, câblage) et répartition de conformité"
      },
      {
        src: "/leoni/image34.png",
        title: "Gestion des Stocks de Câblage",
        alt: "Gestion des Stocks — Suivi des matières premières, connecteurs, bobines de cuivre et alertes de seuils critiques"
      },
      {
        src: "/leoni/image33.png",
        title: "Module RH & Calcul de Paie",
        alt: "RH & Paie — Suivi de la masse salariale, calcul des heures supplémentaires et pointage des présences opérateurs"
      }
    ],
    description: "Conception et développement complet d'une plateforme de supervision industrielle en démarche en V. Intègre la télémétrie en temps réel des lignes de câblage via Socket.IO, l'analyse Pareto 80/20 des défauts qualité, le monitoring des équipements CNC, la gestion des stocks de composants et le module RH de paie."
  },
  {
    num: "02",
    name: "Plateforme de Gestion Hôtelière",
    category: "Application Web Full-Stack · GIGA MANAGER",
    href: "https://github.com/laanayachouaib",
    windowHost: "hotel-manager.giga-pms.app",
    specs: [
      { label: "ENTREPRISE", value: "GIGA MANAGER (Béni Mellal)" },
      { label: "ARCHITECTURE", value: "Conception Merise (MCD/MLD) · UML" }
    ],
    chips: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML5/CSS3", "JWT & Rôles", "phpMyAdmin"],
    metric: { display: "100%", label: "Digitalisation des Réservations", badge: "Planning Interactif" },
    instrumentTag: "Console Hôtelière & Facturation Directe",
    screenshots: [
      {
        src: "/hotel/hotel_screen_17.png",
        title: "Tableau de Bord Hôtelier",
        alt: "Tableau de Bord Hôtelier — Taux d'occupation en direct (20%), réservations actives, revenus mensuels et actions rapides"
      },
      {
        src: "/hotel/hotel_screen_24.png",
        title: "Planning & État des Chambres",
        alt: "Planning des Réservations — Visualisation matricielle de l'état des chambres par statut couleur (Libre, Occupée, Maintenance)"
      },
      {
        src: "/hotel/hotel_screen_21.png",
        title: "Catalogue des Chambres & Tarifs",
        alt: "Gestion des Chambres — Typologies (Single, Double, Suite, Deluxe), tarifs par nuitée et équipements (WiFi, Climatisation)"
      },
      {
        src: "/hotel/hotel_screen_27.png",
        title: "Gestion des Paiements & Règlements",
        alt: "Module Financier — Suivi des règlements clients, modes de paiement et validation des factures de séjours"
      },
      {
        src: "/hotel/hotel_screen_18.png",
        title: "Administration des Rôles & Accès",
        alt: "Gestion des Utilisateurs — Contrôle des accès multi-profils (Administrateurs & Réceptionnistes) et sécurité des comptes"
      }
    ],
    description: "Solution web sur-mesure pour la gestion intégrale d'un établissement hôtelier. Comprend un calendrier dynamique de réservation des chambres, la gestion matricielle des disponibilités avec indicateurs visuels (Libre, Occupée, Maintenance), la facturation des séjours et l'administration des profils réceptionniste et administrateur."
  },
  {
    num: "03",
    name: "AI Legal Assistant · RAG Droit Marocain",
    category: "Intelligence Artificielle Générative · Pipeline RAG Souverain",
    href: "https://github.com/laanayachouaib",
    windowHost: "moroccan-legal-ai.assistant.internal",
    specs: [
      { label: "TASK", value: "RAG Retrieval Pipeline Bilingue" },
      { label: "DATA", value: "Corpus Juridique Marocain (FR / AR)" }
    ],
    chips: ["Python", "LangChain", "ChromaDB", "FastAPI", "Ollama", "Embeddings", "NLP"],
    metric: { display: "3×", label: "Sources Juridiques Citées / Réponse", badge: "Grounding Vérifiable" },
    instrumentTag: "Console RAG Bilingue · Support Arabe RTL & Français",
    screenshots: [
      {
        src: "/legal/01-accueil.webp",
        title: "Portail & Moteur Vectoriel",
        alt: "Portail d'Accueil & Recherche — Recherche sémantique vectorielle dans les codes juridiques commerciaux, pénaux et civils"
      },
      {
        src: "/legal/02-fr-sources.webp",
        title: "Consultation Juridique & Sources (FR)",
        alt: "Consultation Juridique en Français — Réponse assistée par IA avec citations vérifiables des textes de loi (Loi SARL, OPIC, Greffe du tribunal)"
      },
      {
        src: "/legal/03-arabe.webp",
        title: "Interface Interactive Arabe (RTL)",
        alt: "Interface de Dialogue en Arabe (RTL) — Requêtes en langage naturel et analyse juridique interactive avec typographie arabe soignée"
      },
      {
        src: "/legal/04-arabe-sources.webp",
        title: "Extraction d'Articles Sourcés (AR)",
        alt: "Réponse Vérifiable en Arabe — Extraction sémantique et articles du droit marocain (Moudawana Articles 175, 30, 70, 93) avec justifications"
      }
    ],
    description: "Assistant d'intelligence artificielle fondé sur une architecture RAG (Retrieval-Augmented Generation) pour l'indexation et la consultation sémantique des codes de lois marocains (droit commercial, pénal, civil). Génère des réponses juridiques vérifiables et horodatées avec citations directes d'articles en français et en arabe via ChromaDB et LangChain."
  },
  {
    num: "04",
    name: "Market Sentiment AI & NLP Big Data",
    category: "Big Data Analytics · NLP Financier & Prédictif",
    href: "https://github.com/laanayachouaib",
    windowHost: "market-sentiment.powerbi.executive",
    specs: [
      { label: "SOURCES", value: "10K+ Flux Financiers & Réseaux Scrappés" },
      { label: "VISUALISATION", value: "Rapports Décisionnels Power BI" }
    ],
    chips: ["Python", "NLP", "MongoDB", "Power BI", "Scraping", "Data Pipeline", "REST API"],
    metric: { display: "10K+", label: "Articles & Posts Analysés / Jour", badge: "Pipeline Automatisé" },
    instrumentTag: "Dashboard Décisionnel Exécutif Power BI",
    screenshots: [
      {
        src: "/Sentiement/page4.png",
        title: "Distribution de Polarité des News",
        alt: "Analyse Sentimentale des News — Répartition de polarité (positif, neutre, négatif) et scoring par source d'information en temps réel"
      },
      {
        src: "/Sentiement/page3.png",
        title: "Benchmark Multi-Canaux (Twitter/Reddit)",
        alt: "Benchmark Comparatif Multi-Sources — Comparaison des scores d'opinion entre Twitter, actualités financières et Reddit"
      },
      {
        src: "/Sentiement/page2.png",
        title: "Tendances Boursières & Volatilité",
        alt: "Corrélations & Tendances Financières — Analyse de la volatilité des marchés et rendements sectoriels corrélés au sentiment"
      },
      {
        src: "/Sentiement/page1.png",
        title: "Indicateurs Macroéconomiques",
        alt: "Vue Macroéconomique — Dashboard analytique des indicateurs macroéconomiques et financiers par pays et période"
      }
    ],
    description: "Pipeline Big Data automatisé ingérant en continu les flux d'informations financières et réseaux sociaux (Twitter, Reddit, Reuters, Bloomberg). Évalue la polarité et les signaux de sentiment par traitement du langage naturel (NLP) pour dégager des corrélations prédictives avec les tendances de marché sur Power BI."
  }
];

export default function ProjectsSection() {
  const [activeScreenshots, setActiveScreenshots] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectScreenshot = (projectIdx, screenshotIdx) => {
    setActiveScreenshots((prev) => ({ ...prev, [projectIdx]: screenshotIdx }));
  };

  return (
    <section id="projects" className="relative py-28 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">
              <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>// Réalisations & Ingénierie</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-white">
              Projets Concrets
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-400 font-normal leading-relaxed">
            Systèmes industriels, applications web et architectures d'IA développés avec rigueur d'ingénieur, captures d'écrans authentiques et indicateurs vérifiables.
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
                className="bento-card overflow-hidden p-6 sm:p-10 border border-white/[0.08] relative group"
              >
                {/* Header bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.06]">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-base text-cyan-400 font-bold bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20">
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
                      className="cursor-target inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-xs font-mono text-zinc-300 transition-all duration-200 hover:text-white"
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
                    {/* Elevated Mockup Frame */}
                    <div className="overflow-hidden rounded-xl bg-black/80 border border-white/10 shadow-2xl">
                      {/* Window Topbar Frame */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-black/70 border-b border-white/[0.08] backdrop-blur-md">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                          <span className="ml-2 font-mono text-[10px] text-zinc-400 hidden sm:inline-block">
                            {project.windowHost}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono text-[9px] text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            ACTIF
                          </span>
                          <span className="font-mono text-[10px] text-cyan-300 font-medium">
                            {currentImg.title}
                          </span>
                        </div>
                      </div>

                      {/* Main Interactive Screen */}
                      <div
                        onClick={() => setModalImage(currentImg)}
                        className="group/img relative aspect-[16/10] w-full overflow-hidden bg-black/90 cursor-zoom-in"
                        title="Cliquez pour agrandir"
                      >
                        <img
                          src={currentImg.src}
                          alt={currentImg.alt}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/img:scale-102"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 pointer-events-none" />

                        {/* Top Overlay Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                          <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 font-mono text-[10px] text-cyan-300 uppercase shadow-lg">
                            {project.instrumentTag}
                          </span>
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 font-mono text-[10px] text-zinc-300 shadow-lg">
                            <Eye className="h-3 w-3 text-cyan-400" />
                            <span>Plein écran</span>
                          </div>
                        </div>

                        {/* Bottom Overlay Label */}
                        <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                          <div className="px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/10 font-mono text-xs text-zinc-200">
                            <span className="text-cyan-400 font-semibold mr-2">{currentImg.title}</span>
                            <span className="text-[11px] text-zinc-400 hidden sm:inline">{currentImg.alt}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Screenshot Thumbnails Navigation */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between px-1">
                        <span className="font-mono text-[11px] text-zinc-400 font-medium">
                          Vues de l'application ({project.screenshots.length} écrans) :
                        </span>
                        <span className="font-mono text-[10px] text-cyan-400">
                          {activeIdx + 1} / {project.screenshots.length}
                        </span>
                      </div>

                      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                        {project.screenshots.map((s, sIdx) => {
                          const isCurrent = activeIdx === sIdx;
                          return (
                            <button
                              key={sIdx}
                              onClick={() => handleSelectScreenshot(pIdx, sIdx)}
                              className={`group/thumb relative aspect-[16/10] overflow-hidden rounded-lg border transition-all duration-200 text-left ${
                                isCurrent
                                  ? 'border-cyan-400 ring-2 ring-cyan-400/40 shadow-[0_0_15px_rgba(0,240,255,0.35)] opacity-100 scale-[1.02]'
                                  : 'border-white/10 opacity-50 hover:opacity-90 hover:scale-[1.01]'
                              }`}
                            >
                              <img src={s.src} alt={s.alt} className="h-full w-full object-cover object-top" />
                              <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-transparent transition-colors" />
                              <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-sm font-mono text-[9px] text-white font-medium truncate max-w-[90%]">
                                {s.title}
                              </span>
                            </button>
                          );
                        })}
                      </div>
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
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/20 transition-colors">
                      <span className="font-sans font-extrabold text-3xl sm:text-4xl text-white text-gradient-silver">
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
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.06] hover:border-cyan-500/30 hover:text-cyan-300 transition-colors"
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
            className="cursor-target inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-xs font-mono font-medium text-zinc-300 transition-all duration-200 hover:text-white"
          >
            <GithubIcon className="h-4 w-4 text-zinc-400" />
            <span>Consulter tous mes projets sur GitHub (@laanayachouaib)</span>
            <ExternalLink className="h-3.5 w-3.5 text-zinc-500" />
          </a>
        </div>
      </div>

      {/* Modal Zoom / Lightbox */}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden rounded-xl border border-white/20 bg-zinc-950 shadow-2xl cursor-default"
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-black/80">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="font-mono text-sm text-white font-semibold">
                  {modalImage.title}
                </span>
              </div>
              <button
                onClick={() => setModalImage(null)}
                className="rounded-full bg-white/10 hover:bg-white/20 p-2 text-zinc-300 hover:text-white transition-colors"
                title="Fermer (Échap)"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="overflow-auto p-2 bg-black/50 flex items-center justify-center max-h-[75vh]">
              <img
                src={modalImage.src}
                alt={modalImage.alt}
                className="max-h-[72vh] w-auto object-contain rounded-lg shadow-xl"
              />
            </div>

            {/* Modal Caption Footer */}
            <div className="px-5 py-3 border-t border-white/10 bg-black/80">
              <p className="font-mono text-xs text-zinc-400">
                {modalImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
