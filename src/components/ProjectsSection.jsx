import React, { useState } from 'react';
import { ExternalLink, Eye, Lock, ChevronRight, X, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const PROJECTS = [
  {
    num: "01",
    name: "AI Legal Assistant",
    category: "Generative AI · RAG Pipeline",
    href: "https://github.com/Symooomzip/AI-Legal-Assistant-Moroccan-Law---RAG-based-System",
    specs: [
      { label: "TASK", value: "RAG Retrieval Pipeline" },
      { label: "DATA", value: "Moroccan Legal Corpus (FR / AR)" }
    ],
    chips: ["Python", "LangChain", "ChromaDB", "FastAPI", "LLM"],
    metric: { display: "3×", label: "Cited Sources per Answer", badge: "Verifiable Grounding" },
    instrumentTag: "Live Console · Arabic RTL & French",
    screenshots: [
      { src: "/legal/02-fr-sources.webp", alt: "Legal assistant — French answer with cited legal sources" },
      { src: "/legal/04-arabe-sources.webp", alt: "Legal assistant — Arabic RTL answer with article citations" },
      { src: "/legal/03-arabe.webp", alt: "Legal assistant — Arabic consultation interface" },
      { src: "/legal/01-accueil.webp", alt: "Legal assistant — home screen & code search" }
    ],
    description: "Production Retrieval-Augmented Generation (RAG) assistant indexing Morocco's commercial and civil legal codes. Delivers verifiable answers with legal citations in both French and Arabic, utilizing semantic embeddings in ChromaDB and LangChain orchestration."
  },
  {
    num: "02",
    name: "Market Sentiment AI",
    category: "Big Data · NLP Sentiment Analytics",
    href: "https://github.com/Symooomzip/big-data-bi-project",
    specs: [
      { label: "TASK", value: "Multi-Source Sentiment Scoring" },
      { label: "DATA", value: "10K+ Scraped Financial & News Feeds" }
    ],
    chips: ["Python", "MongoDB", "NLP", "Power BI", "Scraping"],
    metric: { display: "10K+", label: "Articles Scraped & Scored", badge: "Automated Pipeline" },
    instrumentTag: "Executive Power BI Dashboard",
    screenshots: [
      { src: "/Sentiement/page4.png", alt: "Power BI dashboard — news sentiment distribution and source analysis" },
      { src: "/Sentiement/page3.png", alt: "Power BI dashboard — sentiment comparison across Twitter, news, and Reddit" },
      { src: "/Sentiement/page 2.png", alt: "Power BI dashboard — financial market trends, returns, and volatility" },
      { src: "/Sentiement/page1.png", alt: "Power BI dashboard — economic indicators by country and period" }
    ],
    description: "Automated big data pipeline ingesting real-time feeds across Twitter, Reddit, and global financial outlets. Models sentiment polarity to correlate market shifts and macroeconomic indicators through dynamic Power BI executive reports."
  },
  {
    num: "03",
    name: "Oil Spill Detection",
    category: "Computer Vision · SAR Satellite Imagery",
    href: "https://github.com/Symooomzip/oil-spill-detection-ml",
    specs: [
      { label: "TASK", value: "Pixel-Level Segmentation" },
      { label: "DATA", value: "Synthetic Aperture Radar (SAR)" }
    ],
    chips: ["PyTorch", "CNN + Transformer", "Gradio", "OpenCV"],
    metric: { display: "0.88", label: "IoU Segmentation Score", badge: "Test Benchmark" },
    instrumentTag: "Live OSPREY Detection Console",
    screenshots: [
      { src: "/oilspill/02-segmentation.webp", alt: "OSPREY console — oil spill segmentation mask and overlay" },
      { src: "/oilspill/01-classification.webp", alt: "OSPREY console — classification with confidence score" }
    ],
    description: "Deep learning computer vision architecture tailored for maritime surveillance. Identifies and segments marine oil slicks from Synthetic Aperture Radar (SAR) imagery with a high 0.88 IoU accuracy score and real-time inference console."
  },
  {
    num: "04",
    name: "CLV & Churn Analytics",
    category: "Client System · FMCG Dislog Group",
    accent: "#B600A8",
    ndaPill: "NDA Protected",
    specs: [
      { label: "CLIENT", value: "Dislog Group (Morocco FMCG)" },
      { label: "DWH", value: "Constellation Architecture" }
    ],
    chips: ["XGBoost", "K-Means", "RFM", "Power BI", "SQL Server"],
    metric: { display: "0.81", label: "Churn AUC-ROC", badge: "Predictive Precision" },
    instrumentTag: "Executive DWH & Churn Console",
    screenshots: [
      { src: "/clv/01-clv-overview.webp", alt: "CLV overview and churn prediction dashboard" },
      { src: "/clv/02-segments.webp", alt: "Customer segmentation RFM clusters" },
      { src: "/clv/03-churn.webp", alt: "Churn risk indicators by account category" },
      { src: "/clv/04-executive.webp", alt: "Executive revenue and churn retention summary" }
    ],
    description: "Predictive customer lifetime value (CLV) and churn prediction engine deployed for Moroccan FMCG leader Dislog Group. Couples RFM behavioral clustering with XGBoost classifiers (0.81 AUC-ROC) to power automated retention playbooks."
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
              <span>// Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-white">
              Selected Works
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-400 font-normal leading-relaxed">
            Real-world systems spanning legal retrieval engines, big data NLP pipelines, and satellite computer vision.
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
                    {project.ndaPill ? (
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 font-mono text-xs font-medium">
                        <Lock className="h-3 w-3" />
                        {project.ndaPill}
                      </span>
                    ) : (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-target inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-xs font-mono text-zinc-300 transition-all"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>Source</span>
                        <ExternalLink className="h-3 w-3 text-zinc-500" />
                      </a>
                    )}
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
                          <span>Expand</span>
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

                  {/* Right Column: Specs & Impact */}
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
            href="https://github.com/Symooomzip"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-xs font-mono font-medium text-zinc-300 transition-all duration-200"
          >
            <GithubIcon className="h-4 w-4 text-zinc-400" />
            <span>View All Repositories on GitHub</span>
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
