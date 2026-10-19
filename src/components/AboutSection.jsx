import React from 'react';
import { GraduationCap, Award, MapPin, Terminal, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 bg-[#050507] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
          {/* Left Column: Heading & Philosophy */}
          <div className="md:w-5/12">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">
              <span>// Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white mb-6">
              Engineering with Pragmatism & Rigor.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-normal mb-6">
              I believe modern AI systems deliver real business value only when the underlying data pipelines,
              evaluation benchmarks, and web delivery architectures are built with unyielding engineering discipline.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <MapPin className="h-4 w-4 text-cyan-400" />
              <span>Based in Casablanca, Morocco · Operating Globally</span>
            </div>
          </div>

          {/* Right Column: Credentials & Pillars */}
          <div className="md:w-7/12 flex flex-col gap-4">
            <div className="bento-card p-6 border border-white/[0.08]">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-cyan-400 shrink-0">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block mb-0.5">
                    Academic Foundation
                  </span>
                  <h3 className="text-base font-semibold text-white mb-1">
                    Master's Degree in Data Science & Artificial Intelligence
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Rigorous specialization in statistical machine learning, deep neural architectures, computer vision, and distributed data systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="bento-card p-6 border border-white/[0.08]">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-emerald-400 shrink-0">
                  <Terminal className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block mb-0.5">
                    Engineering Dual-Core
                  </span>
                  <h3 className="text-base font-semibold text-white mb-1">
                    Degree in Full-Stack Software Engineering
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    End-to-end web and mobile system development — mastering asynchronous architectures, relational & NoSQL databases, and reactive interfaces.
                  </p>
                </div>
              </div>
            </div>

            <div className="bento-card p-6 border border-white/[0.08]">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-300 shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block mb-0.5">
                    Execution Philosophy
                  </span>
                  <h3 className="text-base font-semibold text-white mb-1">
                    Direct Code to Production Mentality
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Zero disconnect between theoretical models and real users. Every pipeline is tested, monitored, containerized with Docker, and shipped.
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
