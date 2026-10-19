import React, { useState } from 'react';
import { ExternalLink, Eye, Layers, Lock, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const PROJECTS = [
  {
    num: "01",
    name: "AI Legal Assistant",
    eyebrow: "GEN AI · RAG — MOROCCAN LAW",
    accent: "#7621B0",
    href: "https://github.com/Symooomzip/AI-Legal-Assistant-Moroccan-Law---RAG-based-System",
    specs: [
      { label: "TASK", value: "RAG PIPELINE" },
      { label: "DATA", value: "LEGAL CORPUS (MA)" }
    ],
    chips: ["PYTHON", "LANGCHAIN", "CHROMADB", "LLM", "FASTAPI"],
    metric: { kind: "stat", value: 3, display: "3", suffix: "×", label: "CITED SOURCES / ANSWER" },
    instrumentCaption: "LIVE UI · RAG CONSULTATION",
    instrumentTag: "LIVE CAPTURE — FR / عربية",
    screenshots: [
      { src: "/legal/02-fr-sources.webp", alt: "Legal assistant — French answer with cited sources" },
      { src: "/legal/04-arabe-sources.webp", alt: "Legal assistant — Arabic RTL answer with citations" },
      { src: "/legal/03-arabe.webp", alt: "Legal assistant — Arabic consultation" },
      { src: "/legal/01-accueil.webp", alt: "Legal assistant — consultation home screen" }
    ],
    description: "An advanced Retrieval-Augmented Generation (RAG) assistant trained on Moroccan civil and commercial legal codes. Features bilingual French and Arabic processing with RTL support, document embeddings with ChromaDB, and real-time verifiable citation generation."
  },
  {
    num: "02",
    name: "Market Sentiment AI",
    eyebrow: "BIG DATA · NLP PIPELINE",
    accent: "#B600A8",
    href: "https://github.com/Symooomzip/big-data-bi-project",
    specs: [
      { label: "TASK", value: "SENTIMENT ANALYSIS" },
      { label: "DATA", value: "NEWS + SOCIAL FEEDS" }
    ],
    chips: ["PYTHON", "MONGODB", "NLP", "POWER BI", "SCRAPING"],
    metric: { kind: "counter", value: 10, display: "10", suffix: "K+", label: "ARTICLES SCRAPED" },
    instrumentCaption: "LIVE POWER BI · SENTIMENT & MARKET ANALYTICS",
    instrumentTag: "LIVE CAPTURE — POWER BI",
    screenshots: [
      { src: "/Sentiement/page4.png", alt: "Power BI dashboard — news sentiment distribution and source analysis" },
      { src: "/Sentiement/page3.png", alt: "Power BI dashboard — sentiment comparison across Twitter, news, and Reddit" },
      { src: "/Sentiement/page 2.png", alt: "Power BI dashboard — financial market trends, returns, and volatility" },
      { src: "/Sentiement/page1.png", alt: "Power BI dashboard — economic indicators by country and period" }
    ],
    description: "Big data pipeline collecting multi-source feeds across Twitter, Reddit, and global news outlets. Evaluates sentiment polarity to identify macroeconomic indicators and market fluctuations, visualized through high-impact interactive Power BI dashboards."
  },
  {
    num: "03",
    name: "Oil Spill Detection",
    eyebrow: "COMPUTER VISION · SATELLITE IMAGERY",
    accent: "#BE4C00",
    href: "https://github.com/Symooomzip/oil-spill-detection-ml",
    specs: [
      { label: "TASK", value: "SEGMENTATION" },
      { label: "DATA", value: "SAR SATELLITE" }
    ],
    chips: ["PYTORCH", "CNN + TRANSFORMER", "GRADIO", "OPENCV"],
    metric: { kind: "ring", value: 0.88, display: "0.88", label: "IoU — TEST SET" },
    instrumentCaption: "LIVE UI · OSPREY DETECTION CONSOLE",
    instrumentTag: "LIVE CAPTURE — CLASSIFY + SEGMENT",
    screenshots: [
      { src: "/oilspill/02-segmentation.webp", alt: "OSPREY console — oil spill segmentation mask and overlay" },
      { src: "/oilspill/01-classification.webp", alt: "OSPREY console — oil spill classification with confidence score" }
    ],
    description: "Deep learning computer vision system detecting marine oil slicks from Synthetic Aperture Radar (SAR) satellite imagery. Achieved a state-of-the-art 0.88 IoU segmentation accuracy with real-time web deployment on Gradio."
  },
  {
    num: "04",
    name: "CLV — Dislog Group",
    eyebrow: "DATA SCIENCE · CLIENT — DISLOG GROUP",
    accent: "#B600A8",
    ndaPill: "NDA · PRIVATE REPO",
    specs: [
      { label: "CLIENT", value: "DISLOG GROUP (CONFIDENTIAL)" },
      { label: "DWH", value: "CONSTELLATION" }
    ],
    chips: ["XGBOOST", "K-MEANS", "RFM", "POWER BI", "SQL SERVER"],
    metric: { kind: "bar", value: 0.81, display: "0.81", label: "CHURN AUC-ROC" },
    instrumentCaption: "LIVE POWER BI · CLV · SEGMENTS · CHURN",
    instrumentTag: "ANONYMIZED — DEMO DATA",
    screenshots: [
      { src: "/clv/01-clv-overview.webp", alt: "CLV overview and churn prediction dashboard" },
      { src: "/clv/02-segments.webp", alt: "Customer segmentation RFM clusters" },
      { src: "/clv/03-churn.webp", alt: "Churn risk indicators by account category" },
      { src: "/clv/04-executive.webp", alt: "Executive revenue and churn retention summary" }
    ],
    description: "Enterprise customer lifetime value (CLV) and churn prediction engine developed for Moroccan FMCG leader Dislog Group. Combines RFM clustering with XGBoost classifiers (0.81 AUC-ROC) to power data-driven retention strategies."
  }
];

export default function ProjectsSection() {
  const [activeScreenshots, setActiveScreenshots] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0
  });

  const [modalImage, setModalImage] = useState(null);

  const handleSelectScreenshot = (projectIdx, screenshotIdx) => {
    setActiveScreenshots((prev) => ({ ...prev, [projectIdx]: screenshotIdx }));
  };

  return (
    <section
      id="projects"
      className="relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#121414] px-6 py-24 sm:px-10 sm:py-28 md:px-14 md:py-36 -mt-8 sm:-mt-12 z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.6)]"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/3 h-[700px] w-[700px] rounded-full bg-gradient-to-b from-[#7621B0]/15 via-[#B600A8]/10 to-transparent blur-[160px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2
          className="hero-heading mb-16 sm:mb-20 md:mb-24 text-center font-kanit font-black uppercase leading-none tracking-tight select-none"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Projects
        </h2>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-16 md:gap-24">
          {PROJECTS.map((project, pIdx) => {
            const activeIdx = activeScreenshots[pIdx] || 0;
            const currentImg = project.screenshots[activeIdx] || project.screenshots[0];

            return (
              <div
                key={project.num}
                className="glow-card relative overflow-hidden rounded-3xl bg-[#16181b]/90 border border-white/[0.08] p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-white/20"
              >
                {/* Accent glow corner */}
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
                  style={{ background: project.accent }}
                />

                {/* Top Metadata Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-8">
                  <div className="flex items-center gap-4">
                    <span
                      className="font-kanit font-black text-3xl sm:text-4xl text-white/40"
                    >
                      {project.num}
                    </span>
                    <div>
                      <span
                        className="font-mono text-xs uppercase tracking-widest font-semibold block"
                        style={{ color: project.accent }}
                      >
                        {project.eyebrow}
                      </span>
                      <h3 className="font-kanit font-extrabold uppercase text-white text-2xl sm:text-3xl tracking-tight">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Actions / NDA Status */}
                  <div className="flex items-center gap-3">
                    {project.ndaPill ? (
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[11px] font-semibold tracking-wider">
                        <Lock className="h-3 w-3" />
                        {project.ndaPill}
                      </span>
                    ) : (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-target inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 text-white font-mono text-xs uppercase tracking-wider transition-all duration-200"
                      >
                        <GithubIcon className="h-4 w-4" />
                        <span>Source Code</span>
                        <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Main Content Layout: Media Gallery & Specs */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Interactive Screenshots Console (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col gap-4">
                    {/* Active Screenshot Display with Modal Zoom */}
                    <div
                      onClick={() => setModalImage(currentImg)}
                      className="group/img relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black/60 border border-white/10 cursor-pointer shadow-2xl"
                    >
                      <img
                        src={currentImg.src}
                        alt={currentImg.alt}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                      
                      {/* Top Bar inside console */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[10px] text-[#00F0FF] tracking-wider uppercase">
                          {project.instrumentTag}
                        </span>
                        <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[10px] text-white/80">
                          <Eye className="h-3 w-3 text-[#B600A8]" />
                          <span>Click to expand</span>
                        </div>
                      </div>

                      {/* Bottom Caption inside console */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="font-mono text-[11px] text-[#D7E2EA]/90 tracking-wide">
                          {project.instrumentCaption}
                        </span>
                        <span className="font-mono text-[10px] text-white/50">
                          {activeIdx + 1} / {project.screenshots.length}
                        </span>
                      </div>
                    </div>

                    {/* Screenshot Thumbnail Switcher */}
                    <div className="grid grid-cols-4 gap-2">
                      {project.screenshots.map((s, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => handleSelectScreenshot(pIdx, sIdx)}
                          className={`relative aspect-[16/10] overflow-hidden rounded-lg border transition-all duration-200 ${
                            activeIdx === sIdx
                              ? 'border-[#00F0FF] ring-2 ring-[#00F0FF]/40 opacity-100 scale-102'
                              : 'border-white/10 opacity-50 hover:opacity-90'
                          }`}
                        >
                          <img src={s.src} alt={s.alt} className="h-full w-full object-cover object-top" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Specs, Metric & Description (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full gap-6">
                    {/* Project Description */}
                    <p className="font-kanit font-light text-[#D7E2EA] text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Hardware / Architecture Specs */}
                    <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                      {project.specs.map((spec, spIdx) => (
                        <div key={spIdx} className="flex flex-col">
                          <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider font-semibold">
                            {spec.label}
                          </span>
                          <span className="font-mono text-xs text-white font-medium truncate">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Dynamic Key Performance Metric Display */}
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/[0.04] to-transparent border border-white/[0.08]">
                      <div className="flex items-baseline gap-1">
                        <span className="font-kanit font-black text-3xl sm:text-4xl text-white hero-heading-bright">
                          {project.metric.display}
                        </span>
                        {project.metric.suffix && (
                          <span className="font-kanit font-black text-xl text-[#B600A8]">
                            {project.metric.suffix}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-xs uppercase font-bold tracking-wider text-[#00F0FF]">
                          {project.metric.label}
                        </span>
                        <span className="text-[11px] text-white/50">
                          Empirical benchmark
                        </span>
                      </div>
                    </div>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      {project.chips.map((chip, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-white/[0.04] text-[#D7E2EA]/85 border border-white/[0.08]"
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

        {/* Bottom GitHub Button */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/Symooomzip"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target inline-flex items-center gap-3 rounded-2xl px-8 py-4 font-kanit font-semibold uppercase tracking-wider text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#B600A8]/50 transition-all duration-300 shadow-xl group hover:shadow-[0_0_30px_rgba(182,0,168,0.3)]"
          >
            <GithubIcon className="h-5 w-5 group-hover:scale-110 transition-transform text-[#00F0FF]" />
            <span>More projects on GitHub</span>
            <ExternalLink className="h-4 w-4 opacity-60" />
          </a>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8 cursor-zoom-out"
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/70 p-2 text-white hover:bg-black transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={modalImage.src}
              alt={modalImage.alt}
              className="max-h-[85vh] w-auto object-contain"
            />
            <div className="bg-[#121414] p-4 text-center font-mono text-xs text-white/80">
              {modalImage.alt}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
