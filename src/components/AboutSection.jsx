import React from 'react';
import { GeometricShape } from './GeometricDecorations';
import { Database, Cpu, Layout, Award, MapPin, Sparkles } from 'lucide-react';

const STATS = [
  { value: 'Master', label: 'Data Science & AI', sub: 'Advanced Engineering' },
  { value: '04+', label: 'Flagship Projects', sub: 'Production AI & Web' },
  { value: '10K+', label: 'Data Points Processed', sub: 'NLP & Satellite Feeds' },
  { value: 'Full-Stack', label: 'End-to-End Delivery', sub: 'From Model to Cloud UI' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-6 md:px-12 bg-[#0d0f12] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-[#7621B0]/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#B600A8]/10 blur-[130px]" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Floating 3D Diamond / Holographic Gem */}
        <div className="mb-6 flex justify-center">
          <GeometricShape
            variant="diamond"
            className="h-[95px] w-[95px] sm:h-[125px] sm:w-[125px] md:h-[160px] md:w-[160px]"
            float="animate-float-slow"
          />
        </div>

        {/* Section Heading */}
        <h2
          className="hero-heading text-center font-kanit font-black uppercase leading-none tracking-tight select-none mb-10"
          style={{ fontSize: "clamp(3rem, 11vw, 150px)" }}
        >
          About Me
        </h2>

        {/* Bio Paragraph */}
        <p className="max-w-[700px] text-center font-kanit font-normal leading-relaxed text-[#D7E2EA] text-base sm:text-lg md:text-xl md:leading-loose mb-14 text-white/90">
          With a <span className="text-[#00F0FF] font-semibold">Master in Data Science & AI</span> and a degree in{' '}
          <span className="text-[#B600A8] font-semibold">Full Stack Development</span>, I build intelligent products
          end to end — from high-throughput data pipelines and custom machine learning models to the polished web apps that
          ship them to real users.
        </p>

        {/* Key Competence Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl mb-16">
          <div className="glow-card p-6 flex flex-col items-center text-center group cursor-target">
            <div className="h-12 w-12 rounded-2xl bg-[#7621B0]/20 border border-[#7621B0]/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="h-6 w-6 text-[#c084fc]" />
            </div>
            <h3 className="font-kanit font-bold uppercase tracking-wider text-white text-lg mb-2">
              Artificial Intelligence
            </h3>
            <p className="text-xs text-[#D7E2EA]/75 leading-relaxed font-light">
              Generative AI, RAG architectures with vector embeddings, LLM orchestration via LangChain, and fine-tuning with LoRA/PEFT.
            </p>
          </div>

          <div className="glow-card p-6 flex flex-col items-center text-center group cursor-target">
            <div className="h-12 w-12 rounded-2xl bg-[#B600A8]/20 border border-[#B600A8]/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Database className="h-6 w-6 text-[#f472b6]" />
            </div>
            <h3 className="font-kanit font-bold uppercase tracking-wider text-white text-lg mb-2">
              Data Engineering
            </h3>
            <p className="text-xs text-[#D7E2EA]/75 leading-relaxed font-light">
              ETL/ELT data pipelines, warehousing with SQL Server, MongoDB & MySQL, and executive Power BI dashboards with DAX modeling.
            </p>
          </div>

          <div className="glow-card p-6 flex flex-col items-center text-center group cursor-target">
            <div className="h-12 w-12 rounded-2xl bg-[#00F0FF]/20 border border-[#00F0FF]/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Layout className="h-6 w-6 text-[#67e8f9]" />
            </div>
            <h3 className="font-kanit font-bold uppercase tracking-wider text-white text-lg mb-2">
              Full Stack Products
            </h3>
            <p className="text-xs text-[#D7E2EA]/75 leading-relaxed font-light">
              Modern responsive web applications in React & Node.js, enterprise REST APIs in .NET, and native cross-platform mobile with Flutter.
            </p>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl pt-10 border-t border-white/[0.08]">
          {STATS.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="font-kanit font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight hero-heading-bright">
                {s.value}
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#00F0FF] mt-1 font-semibold">
                {s.label}
              </span>
              <span className="text-[11px] text-[#D7E2EA]/50 font-light mt-0.5">
                {s.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
