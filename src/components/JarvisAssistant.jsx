import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, ExternalLink, Bot, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';

const GREETING = "Hi — I'm J.A.R.V.I.S, Mohammed's portfolio assistant. Ask me about his projects, his tech stack, or how to reach him!";

const SUGGESTIONS = [
  "What has he built with LLMs?",
  "Quel est son stack technique ?",
  "Is he open to work?",
  "How to get in touch?"
];

// Rich portfolio knowledge base
const KNOWLEDGE_BASE = [
  {
    keywords: ['llm', 'rag', 'gen ai', 'generative', 'langchain', 'moroccan law', 'legal', 'chromadb'],
    reply: "Mohammed built the AI Legal Assistant for Moroccan Law — an end-to-end RAG system leveraging LangChain, ChromaDB vector search, and LLMs with citations of official legal codes in both French and Arabic (RTL support). He also works with LoRA/PEFT fine-tuning and Hugging Face deployments."
  },
  {
    keywords: ['stack', 'tech', 'technologies', 'skills', 'tools', 'languages', 'competence'],
    reply: "His core stack covers the full data & product lifecycle:\n• AI / ML: Python, PyTorch, TensorFlow, Scikit-learn, LangChain, ChromaDB, Hugging Face\n• Data: SQL Server, MongoDB, MySQL, ETL pipelines, Power BI, DAX\n• Full Stack: React, Node.js, .NET, TypeScript, Tailwind CSS, Flutter, Docker"
  },
  {
    keywords: ['open to work', 'available', 'hire', 'recrutement', 'job', 'disponible', 'stage', 'freelance'],
    reply: "Yes, absolutely! Mohammed is actively open to Data Scientist, AI Engineer, and Full Stack Developer roles — whether full-time, contract, or remote. He thrives at the intersection of AI models and production web products."
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
  const [showHint, setShowHint] = useState(false);
  const [hasSeenHint, setHasSeenHint] = useState(false);
  const [copied, setCopied] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Show hint bubble after scrolling past 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350 && !hasSeenHint && !isOpen) {
        setShowHint(true);
        setHasSeenHint(true);
        setTimeout(() => setShowHint(false), 8000);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasSeenHint, isOpen]);

  const handleSend = (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg = { id: Date.now().toString(), role: 'user', content: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // AI answer synthesis
    setTimeout(() => {
      const lower = query.toLowerCase();
      let matched = KNOWLEDGE_BASE.find((k) =>
        k.keywords.some((kw) => lower.includes(kw))
      );

      let replyText = matched
        ? matched.reply
        : `Mohammed is an AI Engineer and Full Stack Developer specialized in Machine Learning, RAG/LLMs, and Data Engineering. Feel free to ask about his specific projects (Legal Assistant, Market Sentiment, Oil Spill), his stack, or email him at mr.fakir.mohammed@gmail.com!`;

      // Typewriter effect
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
              m.id === botMsgId
                ? { ...m, content: replyText.substring(0, currentLength) }
                : m
            )
          );
        }
      }, 15);
    }, 400);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mr.fakir.mohammed@gmail.com');
    setCopied(true);
    confetti({ particleCount: 35, spread: 60, origin: { y: 0.85 } });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating hint tooltip */}
      {showHint && !isOpen && (
        <div
          onClick={() => {
            setIsOpen(true);
            setShowHint(false);
          }}
          className="mb-3 max-w-xs cursor-pointer rounded-2xl bg-[#121414]/95 p-4 text-xs shadow-2xl backdrop-blur-xl border border-[#B600A8]/40 animate-bounce duration-1000 text-[#D7E2EA]"
        >
          <div className="flex items-center gap-2 font-mono text-[#00F0FF] uppercase text-[10px] tracking-wider mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
            </span>
            J.A.R.V.I.S Assistant
          </div>
          <p className="font-light text-white/90">
            Have questions about Mohammed's projects or stack? Click here to chat!
          </p>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 flex h-[500px] w-[350px] sm:w-[410px] flex-col overflow-hidden rounded-3xl bg-[#0f1115]/95 shadow-2xl backdrop-blur-2xl border border-white/10 ring-1 ring-white/10">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[#18011F] via-[#121414] to-[#0f1115] px-5 py-4">
            <div className="flex items-center gap-3">
              {/* Sci-Fi Holographic Reactor Avatar */}
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#B600A8]/20 border border-[#B600A8]/60 shadow-[0_0_15px_rgba(182,0,168,0.5)]">
                <svg viewBox="0 0 24 24" className="h-6 w-6 animate-spin duration-[8000ms]">
                  <circle
                    cx="12"
                    cy="12"
                    r="9.5"
                    stroke="#D7E2EA"
                    strokeOpacity="0.4"
                    strokeWidth="1.2"
                    strokeDasharray="4 3"
                    fill="none"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="6.5"
                    stroke="#00F0FF"
                    strokeWidth="1.2"
                    strokeDasharray="3 2"
                    fill="none"
                  />
                </svg>
                <div className="absolute h-2 w-2 rounded-full bg-white shadow-[0_0_8px_#ffffff] animate-ping" />
              </div>
              <div>
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  J.A.R.V.I.S <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/30">ONLINE</span>
                </h3>
                <p className="text-[11px] text-[#D7E2EA]/60">Mohammed's AI Portfolio Guide</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1.5 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs leading-relaxed">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                    m.role === 'user'
                      ? 'bg-gradient-to-r from-[#7621B0] to-[#B600A8] text-white shadow-lg'
                      : 'bg-[#181b22] text-[#D7E2EA] border border-white/[0.08] shadow-md'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-[#181b22] px-4 py-3 border border-white/[0.08] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00F0FF] animate-bounce"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B600A8] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-4 py-2 flex flex-wrap gap-1.5 border-t border-white/[0.06] bg-[#0d0f12]">
            {SUGGESTIONS.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(s)}
                className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] text-[#D7E2EA]/80 hover:bg-[#B600A8]/20 hover:text-white hover:border-[#B600A8]/50 border border-white/[0.06] transition-all"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 border-t border-white/10 bg-[#121414] p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask J.A.R.V.I.S anything..."
              className="flex-1 rounded-xl bg-white/[0.06] px-3.5 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#B600A8] border border-white/10"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="rounded-xl bg-[#B600A8] p-2 text-white hover:bg-[#c900ba] disabled:opacity-40 transition-colors shadow-lg"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button with Rotating Holographic Reactor */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowHint(false);
        }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#121414] text-white shadow-[0_0_30px_rgba(182,0,168,0.45)] border border-[#B600A8]/60 hover:scale-105 transition-all duration-300"
      >
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#7621B0] to-[#B600A8] opacity-50 blur group-hover:opacity-100 transition-opacity" />
        
        {/* Animated Reactor Core Rings */}
        <div className="relative flex h-full w-full items-center justify-center">
          <svg viewBox="0 0 24 24" className="absolute h-9 w-9 animate-spin duration-[10000ms]">
            <circle
              cx="12"
              cy="12"
              r="9.5"
              stroke="white"
              strokeOpacity="0.45"
              strokeWidth="1"
              strokeDasharray="3 2.4"
              fill="none"
            />
            <circle
              cx="12"
              cy="12"
              r="6.5"
              stroke="#00F0FF"
              strokeWidth="1.2"
              strokeDasharray="2.2 1.8"
              fill="none"
            />
          </svg>
          <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_12px_#ffffff] group-hover:scale-125 transition-transform" />
        </div>
      </button>
    </div>
  );
}
