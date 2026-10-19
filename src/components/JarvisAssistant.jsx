import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles, Bot, Check, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const GREETING = "Hello. I'm J.A.R.V.I.S, Mohammed's portfolio intelligence assistant. Ask me about his architecture, LLM/RAG pipelines, full stack, or how to reach him.";

const SUGGESTIONS = [
  "What has he built with LLMs?",
  "Quel est son stack technique ?",
  "Is he open to work?",
  "How to get in touch?"
];

const KNOWLEDGE_BASE = [
  {
    keywords: ['llm', 'rag', 'gen ai', 'generative', 'langchain', 'moroccan law', 'legal', 'chromadb'],
    reply: "Mohammed engineered the AI Legal Assistant for Moroccan Law — a production RAG system leveraging LangChain, ChromaDB semantic vector search, and LLMs with citations of official legal codes in both French and Arabic (RTL support). He also works with LoRA/PEFT fine-tuning and Hugging Face deployments."
  },
  {
    keywords: ['stack', 'tech', 'technologies', 'skills', 'tools', 'languages', 'competence'],
    reply: "His core stack covers the full data & product lifecycle:\n• AI / ML: Python, PyTorch, TensorFlow, Scikit-learn, LangChain, ChromaDB, Hugging Face\n• Data: SQL Server, MongoDB, MySQL, ETL pipelines, Power BI, DAX\n• Full Stack: React, Node.js, .NET Core, TypeScript, Tailwind CSS, Flutter, Docker"
  },
  {
    keywords: ['open to work', 'available', 'hire', 'recrutement', 'job', 'disponible', 'stage', 'freelance'],
    reply: "Yes, absolutely! Mohammed is actively open to Data Scientist, AI Engineer, and Full Stack Developer roles — whether full-time, contract, or remote. He bridges mathematical modeling and production web products."
  },
  {
    keywords: ['contact', 'email', 'reach', 'touch', 'linkedin', 'github', 'phone', 'mail', 'joindre'],
    reply: "You can reach Mohammed directly at mr.fakir.mohammed@gmail.com, on LinkedIn (linkedin.com/in/mohammed-fakir), or check his repositories on GitHub (github.com/Symooomzip)."
  },
  {
    keywords: ['project', 'projets', 'portfolio', 'sentiment', 'oil spill', 'clv', 'dislog'],
    reply: "Mohammed has 4 flagship featured projects:\n1. AI Legal Assistant (Gen AI / RAG for Moroccan Law)\n2. Market Sentiment AI (Big Data NLP & Power BI dashboard with 10k+ scraped news articles)\n3. Oil Spill Detection (Computer Vision SAR Satellite segmentation with 0.88 IoU)\n4. CLV & Churn Analytics for Dislog Group (0.81 AUC-ROC predictive model & executive DWH)"
  },
  {
    keywords: ['education', 'degree', 'master', 'formation', 'etudes', 'diplome', 'casablanca'],
    reply: "Mohammed holds a Master's degree in Data Science & Artificial Intelligence, combined with a degree in Full Stack Web & Mobile Development. He is based in Casablanca, Morocco."
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
        : `Mohammed is a Senior AI Systems Engineer and Full Stack Architect. Ask about his specific projects (Legal Assistant, Market Sentiment, Oil Spill), his stack, or reach him at mr.fakir.mohammed@gmail.com!`;

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
                J.A.R.V.I.S Core
              </span>
              <span className="text-[10px] font-mono text-zinc-500">/ v2.4</span>
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
              placeholder="Query assistant..."
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
          J.A.R.V.I.S AI
        </span>
      </button>
    </div>
  );
}
