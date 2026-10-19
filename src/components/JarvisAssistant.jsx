import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles, Bot, Check, ArrowRight } from 'lucide-react';

const GREETING = "Bonjour ! Je suis J.A.R.V.I.S, l'assistant virtuel de Chouaib LAANAYA. Posez-moi des questions sur ses projets (LEONI, Giga Manager), son stack (React 19, Node.js, Spring Boot, Ollama) ou ses disponibilités pour un stage !";

const SUGGESTIONS = [
  "Quels projets a-t-il réalisés chez LEONI ?",
  "Quel est son stack technique principal ?",
  "Est-il disponible pour un stage ?",
  "Comment le contacter directement ?"
];

const KNOWLEDGE_BASE = [
  {
    keywords: ['leoni', 'industriel', 'trs', 'pareto', 'usine', 'performance', 'socket'],
    reply: "Chez LEONI Wiring Systems (Berrechid), Chouaib a conçu et développé un tableau de bord complet d'optimisation de la performance industrielle (démarche en V) pour 5 profils métiers. Stack : React 19, TypeScript, Vite, Tailwind CSS, Zustand, Recharts (calcul du TRS, diagrammes de Pareto, heatmaps), API Node.js/Express, PostgreSQL et alertes en temps réel via Socket.IO."
  },
  {
    keywords: ['stack', 'technologies', 'compétences', 'languages', 'outils', 'framework'],
    reply: "Le stack technique de Chouaib couvre l'ensemble du cycle logiciel :\n• Front-End : React 19, TypeScript, Vite, Tailwind CSS, Zustand, Recharts, Angular, Bootstrap\n• Back-End : Node.js, Express, Java & Spring Boot, Python & Django, PHP, APIs REST, JWT & RBAC\n• Données : PostgreSQL, MySQL, modélisation Merise / UML, Power BI\n• IA & DevOps : Ollama (exécution de LLMs en local), Docker, Git, Linux (Ubuntu, AlmaLinux)"
  },
  {
    keywords: ['stage', 'disponible', 'recrutement', 'embauche', 'job', 'alternance', 'open to work'],
    reply: "Oui ! Chouaib LAANAYA est actuellement en cycle ingénieur informatique à l'Université Mundiapolis et recherche activement un stage pour mettre en pratique ses compétences en développement full-stack et contribuer à des projets d'envergure. Il est mobile à Casablanca et partout au Maroc."
  },
  {
    keywords: ['contact', 'email', 'téléphone', 'phone', 'mail', 'joindre', 'github', 'cv'],
    reply: "Vous pouvez contacter Chouaib directement :\n• Email : laanayachouaib@gmail.com\n• Téléphone : +212 635 313 101\n• GitHub : github.com/laanayachouaib\n• Son CV PDF est également téléchargeable en un clic sur le portfolio."
  },
  {
    keywords: ['hotel', 'giga manager', 'agrisani', 'pfe', 'licence'],
    reply: "En plus de son expérience chez LEONI, Chouaib a développé :\n1. Une plateforme de gestion hôtelière complète chez GIGA MANAGER (planning interactif des réservations, facturation, suivi des taux d'occupation sous PHP/MySQL)\n2. Une application web de gestion de stock agricole chez AgriSani\n3. Des intégrations d'IA locales sécurisées avec Ollama."
  },
  {
    keywords: ['formation', 'école', 'université', 'mundiapolis', 'études', 'diplôme', 'ingénieur'],
    reply: "Chouaib prépare actuellement son Diplôme d'Ingénieur en Informatique à l'Université Mundiapolis (2025–2027). Il est titulaire d'une Licence en Informatique Appliquée (2022–2025) de la même université, ainsi que de la certification AWS Academy Cloud Foundations (2020)."
  }
];

export default function JarvisAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 'greeting', role: 'assistant', content: GREETING }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg = { id: Date.now().toString(), role: 'user', content: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let matched = KNOWLEDGE_BASE.find((k) =>
        k.keywords.some((kw) => lower.includes(kw))
      );

      let replyText = matched
        ? matched.reply
        : `Chouaib LAANAYA est élève ingénieur informatique à l'Université Mundiapolis, spécialisé en développement Full-Stack (React 19, TypeScript, Node.js, Spring Boot) et intégration IA (Ollama). N'hésitez pas à lui envoyer un email à laanayachouaib@gmail.com ou à l'appeler au +212 635 313 101 !`;

      let currentLength = 0;
      const botMsgId = (Date.now() + 1).toString();
      setMessages((prev) => [...prev, { id: botMsgId, role: 'assistant', content: '' }]);

      const typeInterval = setInterval(() => {
        currentLength += 3;
        if (currentLength >= replyText.length) {
          clearInterval(typeInterval);
          setMessages((prev) =>
            prev.map((m) => (m.id === botMsgId ? { ...m, content: replyText } : m))
          );
          setIsTyping(false);
        } else {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === botMsgId ? { ...m, content: replyText.substring(0, currentLength) } : m
            )
          );
        }
      }, 12);
    }, 300);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Chat Window */}
      {isOpen && (
        <div className="mb-3 flex h-[480px] w-[340px] sm:w-[390px] flex-col overflow-hidden rounded-2xl bg-[#0a0b0e]/95 backdrop-blur-2xl border border-white/10 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
              <span className="font-mono text-xs font-semibold text-white tracking-wide">
                Assistant Virtuel · Chouaib LAANAYA
              </span>
              <span className="text-[10px] font-mono text-zinc-500">/ IA</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs leading-relaxed">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 ${
                    m.role === 'user'
                      ? 'bg-white text-black font-medium'
                      : 'bg-white/[0.04] text-zinc-300 border border-white/[0.06]'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-xl bg-white/[0.04] px-3.5 py-2 border border-white/[0.06] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse [animation-delay:0.2s]"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt chips */}
          <div className="px-3 py-2 flex flex-wrap gap-1 border-t border-white/[0.06] bg-black/40">
            {SUGGESTIONS.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(s)}
                className="rounded-md bg-white/[0.03] px-2 py-1 text-[10px] text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors border border-white/[0.04]"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 border-t border-white/[0.08] p-2.5 bg-[#050507]"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Poser une question..."
              className="flex-1 rounded-lg bg-white/[0.04] px-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 border border-white/[0.06]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-1.5 rounded-lg bg-white text-black hover:bg-zinc-200 disabled:opacity-30 transition-colors"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Pill Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-target group flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0a0b0e]/90 hover:bg-[#12141a] text-zinc-200 border border-white/[0.12] hover:border-cyan-400/40 shadow-xl backdrop-blur-xl transition-all duration-200 hover:scale-102"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </span>
        <span className="font-mono text-xs font-medium tracking-wide">
          Assistant IA · Chouaib
        </span>
      </button>
    </div>
  );
}
