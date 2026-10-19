import React, { useState } from 'react';
import { GeometricShape } from './GeometricDecorations';
import { ArrowUpRight } from 'lucide-react';

const EXPERTISE_DATA = [
  {
    num: "01",
    name: "Machine Learning",
    description: "Design, training and evaluation of predictive models — churn prediction, customer segmentation, computer vision — with scikit-learn, XGBoost, PyTorch and TensorFlow.",
    chips: ["scikit-learn", "XGBoost", "PyTorch", "TensorFlow"],
    accent: "#7621B0"
  },
  {
    num: "02",
    name: "Generative AI",
    description: "LLM-powered systems built for production: RAG pipelines with vector databases, efficient fine-tuning with LoRA/PEFT, LangChain orchestration and Hugging Face deployment.",
    chips: ["LangChain", "RAG", "LoRA / PEFT", "Hugging Face", "ChromaDB"],
    accent: "#B600A8"
  },
  {
    num: "03",
    name: "Data Engineering",
    description: "Complete ETL pipelines: extraction, cleaning and centralization of raw business data into data warehouses — SQL Server, MongoDB, MySQL — ready for analysis and modeling.",
    chips: ["ETL Pipelines", "SQL Server", "MongoDB", "MySQL", "Data Warehousing"],
    accent: "#BE4C00"
  },
  {
    num: "04",
    name: "Full Stack Development",
    description: "Production web applications from front to back — MERN stack, .NET, REST APIs — plus mobile apps with Flutter and native Android.",
    chips: ["React", "Node.js", ".NET", "REST APIs", "Flutter", "Tailwind CSS"],
    accent: "#00F0FF"
  },
  {
    num: "05",
    name: "Business Intelligence",
    description: "Power BI dashboards that turn KPIs into decisions — data modeling, DAX, and visual storytelling for business teams.",
    chips: ["Power BI", "DAX", "Data Modeling", "Executive KPIs", "Excel"],
    accent: "#7621B0"
  }
];

export default function ExpertiseSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="expertise"
      className="relative overflow-hidden rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#18011F] px-6 py-24 sm:px-10 sm:py-28 md:px-14 md:py-36 -mt-8 sm:-mt-12 z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-b from-[#B600A8]/20 via-[#7621B0]/10 to-transparent blur-[140px]" />
      
      {/* Floating 3D sphere decoration */}
      <div className="absolute top-12 right-12 hidden lg:block pointer-events-none">
        <GeometricShape variant="sphere" className="h-28 w-28" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2
          className="hero-heading mb-16 sm:mb-20 md:mb-28 text-center font-kanit font-black uppercase leading-none tracking-tight select-none"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Expertise
        </h2>

        {/* Expertise List Items */}
        <div className="divide-y divide-white/[0.12]">
          {EXPERTISE_DATA.map((item, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={item.num}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative cursor-target py-10 sm:py-12 md:py-14 transition-all duration-300"
              >
                {/* Subtle highlight backplate on hover */}
                <div
                  className={`absolute inset-0 -mx-4 sm:-mx-8 rounded-2xl bg-white/[0.02] transition-opacity duration-300 pointer-events-none ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="relative flex flex-col md:flex-row md:items-start gap-6 sm:gap-10 md:gap-14">
                  {/* Huge Number */}
                  <span
                    className="hero-heading font-kanit font-black leading-none select-none transition-transform duration-300 group-hover:scale-105"
                    style={{ fontSize: "clamp(3rem, 9vw, 130px)" }}
                  >
                    {item.num}
                  </span>

                  {/* Body Content */}
                  <div className="flex-1 flex flex-col justify-center gap-3">
                    <div className="flex items-center justify-between">
                      <h3
                        className="font-kanit font-bold uppercase text-[#D7E2EA] group-hover:text-white transition-colors duration-200"
                        style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)" }}
                      >
                        {item.name}
                      </h3>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 font-mono text-xs uppercase text-[#00F0FF]">
                        <span>Domain Specs</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>

                    <p className="max-w-3xl font-kanit font-light text-[#D7E2EA]/80 leading-relaxed text-sm sm:text-base md:text-lg">
                      {item.description}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      {item.chips.map((chip, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-white/[0.05] text-[#D7E2EA]/90 border border-white/[0.08] group-hover:border-[#B600A8]/40 transition-colors"
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
      </div>
    </section>
  );
}
