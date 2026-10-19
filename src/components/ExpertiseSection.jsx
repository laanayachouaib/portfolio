import React from 'react';
import { Layout, Server, Activity, Database, Bot, GitBranch, ArrowUpRight } from 'lucide-react';

const CAPABILITIES = [
  {
    icon: Layout,
    num: "01",
    title: "Développement Front-End Moderne & Réactif",
    tagline: "React 19 · TypeScript · Vite · Tailwind CSS",
    description: "Conception d'interfaces web réactives, modulaires et fluides avec React 19, TypeScript, Tailwind CSS, Zustand pour le state management et Recharts pour les graphiques analytiques (Pareto, heatmaps, TRS).",
    techs: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "Recharts", "Bootstrap"],
    span: "md:col-span-8"
  },
  {
    icon: Server,
    num: "02",
    title: "Architecture Back-End & APIs REST",
    tagline: "Node.js · Express · Spring Boot · PHP",
    description: "Développement d'APIs REST sécurisées et performantes, implémentation de l'authentification JWT, gestion fine des rôles (RBAC) et architecture logicielle selon les Design Patterns et le modèle en V.",
    techs: ["Node.js", "Express", "Spring Boot", "Django", "PHP", "JWT & RBAC"],
    span: "md:col-span-4"
  },
  {
    icon: Activity,
    num: "03",
    title: "Systèmes Temps Réel & Performance Industrielle",
    tagline: "Socket.IO · Alertes en direct · Suivi TRS",
    description: "Spécialisation dans les tableaux de bord opérationnels et industriels : flux d'alertes instantanées par WebSockets (Socket.IO), calcul du TRS, export de rapports automatisés et suivi des opérateurs.",
    techs: ["Socket.IO", "WebSockets", "KPIs & TRS", "Pareto", "Heatmaps", "Export Excel"],
    span: "md:col-span-4"
  },
  {
    icon: Database,
    num: "04",
    title: "Bases de Données & Modélisation",
    tagline: "PostgreSQL · MySQL · Merise · UML",
    description: "Conception rigoureuse de schémas de données relationnels (MCD/MLD Merise, diagrammes de classes et séquences UML) et optimisation des requêtes sous PostgreSQL et MySQL.",
    techs: ["PostgreSQL", "MySQL", "UML", "Merise", "Power BI", "DAX"],
    span: "md:col-span-4"
  },
  {
    icon: Bot,
    num: "05",
    title: "Intelligence Artificielle Locale & DevOps",
    tagline: "Ollama (LLMs) · Docker · Linux · Git",
    description: "Exécution et intégration de modèles de langage (LLMs) en local avec Ollama pour l'automatisation et l'assistance intelligente en toute confidentialité. Conteneurisation Docker et environnement Linux (Ubuntu, AlmaLinux).",
    techs: ["Ollama", "LLMs en local", "Docker", "Git", "Linux", "GanttProject"],
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
              <span>// Compétences</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-white">
              Domaines d'Expertise
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-400 font-normal leading-relaxed">
            Une approche d'ingénierie rigoureuse de la spécification technique (modèle en V) au déploiement de solutions logicielles opérationnelles.
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
