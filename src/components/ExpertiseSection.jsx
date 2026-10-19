import React from 'react';
import { Brain, Cpu, Database, Layout, BarChart3, Code2, ArrowUpRight } from 'lucide-react';

const CAPABILITIES = [
  {
    icon: Brain,
    num: "01",
    title: "Generative AI & LLM Orchestration",
    tagline: "Production RAG Pipelines & Embeddings",
    description: "Architecting end-to-end Retrieval-Augmented Generation (RAG) with vector databases (ChromaDB), LangChain orchestration, and parameter-efficient fine-tuning (LoRA/PEFT).",
    techs: ["LangChain", "ChromaDB", "LoRA / PEFT", "Hugging Face", "Vector Search"],
    span: "md:col-span-8"
  },
  {
    icon: Cpu,
    num: "02",
    title: "Machine Learning & Vision",
    tagline: "Predictive Models & SAR Satellite CV",
    description: "Designing, training, and deploying high-precision computer vision (IoU 0.88 SAR segmentation) and classification models with PyTorch and Scikit-Learn.",
    techs: ["PyTorch", "XGBoost", "Scikit-Learn", "OpenCV"],
    span: "md:col-span-4"
  },
  {
    icon: Database,
    num: "03",
    title: "Data Engineering & Pipelines",
    tagline: "High-Throughput ETL & Warehousing",
    description: "Complete extraction, cleaning, and transformation pipelines consolidating disparate business data into optimized SQL Server, MongoDB, and MySQL data warehouses.",
    techs: ["SQL Server", "MongoDB", "MySQL", "ETL Pipelines", "Data Modeling"],
    span: "md:col-span-4"
  },
  {
    icon: Layout,
    num: "04",
    title: "Full-Stack Web & Mobile Architecture",
    tagline: "Modern Reactive Frontends & Scalable Backends",
    description: "Building production-grade web applications in React & Node.js, enterprise REST APIs in .NET, plus cross-platform mobile experiences with Flutter.",
    techs: ["React", "Node.js", ".NET Core", "REST APIs", "Flutter", "Tailwind"],
    span: "md:col-span-4"
  },
  {
    icon: BarChart3,
    num: "05",
    title: "Business Intelligence & Analytics",
    tagline: "Executive Storytelling & DAX Modeling",
    description: "Transforming raw behavioral data and market signals into intuitive, executive-ready Power BI dashboards driven by advanced DAX calculations.",
    techs: ["Power BI", "DAX", "Executive KPIs", "Data Analytics"],
    span: "md:col-span-4"
  }
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="relative py-28 px-6 bg-[#050507]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">
              <span>// Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-white">
              Technical Expertise
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-400 font-normal leading-relaxed">
            Delivering the complete engineering lifecycle from mathematical modeling to deployed enterprise user interfaces.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {CAPABILITIES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`bento-card p-6 sm:p-8 flex flex-col justify-between group ${item.span}`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-300 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">
                      {item.num}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider block mb-1">
                    {item.tagline}
                  </span>
                  <h3 className="text-lg sm:text-xl font-sans font-bold text-white mb-3 group-hover:text-zinc-100 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {item.techs.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
