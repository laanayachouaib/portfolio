import React, { useState } from 'react';
import TrueFocus from './TrueFocus';
import { Mail, Copy, Check, Send, Sparkles, MapPin, Download } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

const CONTACT_LINKS = [
  {
    label: "mr.fakir.mohammed@gmail.com",
    href: "mailto:mr.fakir.mohammed@gmail.com",
    icon: Mail,
    isEmail: true
  },
  {
    label: "LinkedIn",
    sub: "/in/mohammed-fakir",
    href: "https://linkedin.com/in/mohammed-fakir",
    icon: LinkedinIcon
  },
  {
    label: "GitHub",
    sub: "@Symooomzip",
    href: "https://github.com/Symooomzip",
    icon: GithubIcon
  }
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('mr.fakir.mohammed@gmail.com');
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.7 }
    });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', role: '', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 py-28 sm:px-10 md:px-14 bg-[#0a0b0d] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-t from-[#7621B0]/20 via-[#B600A8]/10 to-transparent blur-[140px]" />

      <div className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-center text-center">
        {/* Animated TrueFocus Headline */}
        <div className="mb-6 w-full flex justify-center">
          <TrueFocus
            sentence="LET'S TALK"
            manualMode={false}
            blurAmount={4}
            borderColor="#B600A8"
            glowColor="rgba(182, 0, 168, 0.8)"
            animationDuration={0.5}
            pauseBetweenAnimations={1.5}
            wordClassName="hero-heading uppercase font-kanit font-black tracking-tight text-5xl sm:text-7xl md:text-8xl"
          />
        </div>

        {/* Subtitle */}
        <p className="max-w-[580px] font-kanit font-light text-[#D7E2EA]/85 text-base sm:text-lg md:text-xl leading-relaxed mb-12">
          Open to <span className="text-[#00F0FF] font-medium">Data Scientist</span>,{' '}
          <span className="text-[#c084fc] font-medium">AI Engineer</span> and{' '}
          <span className="text-[#f472b6] font-medium">Full Stack roles</span> — or any project that needs
          both the product and the intelligence behind it.
        </p>

        {/* Quick Contact Action Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {/* Email button with Copy */}
          <button
            onClick={handleCopy}
            className="cursor-target group flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-[#B600A8]/20 border border-white/10 hover:border-[#B600A8]/50 text-white font-mono text-xs sm:text-sm transition-all duration-300 shadow-lg"
          >
            <Mail className="h-4 w-4 text-[#00F0FF]" />
            <span className="font-semibold tracking-wide">mr.fakir.mohammed@gmail.com</span>
            {copied ? (
              <span className="flex items-center gap-1 text-emerald-400 font-mono text-[11px]">
                <Check className="h-3.5 w-3.5" /> Copied!
              </span>
            ) : (
              <Copy className="h-3.5 w-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
            )}
          </button>

          {/* LinkedIn Link */}
          <a
            href="https://linkedin.com/in/mohammed-fakir"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 text-white font-mono text-xs sm:text-sm transition-all duration-300"
          >
            <LinkedinIcon className="h-4 w-4 text-[#0077b5]" />
            <span className="font-semibold">LinkedIn</span>
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com/Symooomzip"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 text-white font-mono text-xs sm:text-sm transition-all duration-300"
          >
            <GithubIcon className="h-4 w-4 text-white" />
            <span className="font-semibold">GitHub</span>
          </a>
        </div>

        {/* Interactive Direct Message Card */}
        <div className="glow-card w-full max-w-2xl text-left p-8 sm:p-10 border border-white/10 mb-16">
          <div className="flex items-center justify-between mb-6 border-b border-white/[0.08] pb-4">
            <div>
              <h3 className="font-kanit font-bold text-xl uppercase tracking-wider text-white">
                Send a Message
              </h3>
              <p className="text-xs text-[#D7E2EA]/60 font-light mt-0.5">
                Direct inquiry · Usually responds within 24 hours
              </p>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs text-[#00F0FF]">
              <MapPin className="h-3.5 w-3.5" />
              <span>Casablanca, MA</span>
            </div>
          </div>

          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="h-14 w-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                <Check className="h-7 w-7" />
              </div>
              <h4 className="font-kanit font-bold text-xl text-white uppercase mb-1">
                Message Dispatched!
              </h4>
              <p className="text-xs text-[#D7E2EA]/75 max-w-sm">
                Thank you! Your inquiry has been recorded. Mohammed will review it shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:border-[#B600A8] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:border-[#B600A8] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-1.5">
                  Opportunity Type / Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. Full-time Role / AI Project Consultation / Freelance"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:border-[#B600A8] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-1.5">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell me about your team, problem space, or product goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:border-[#B600A8] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="cursor-target mt-2 inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-6 font-kanit font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:brightness-125 shadow-lg"
                style={{
                  background: "linear-gradient(123deg, #7621B0 0%, #B600A8 100%)",
                  boxShadow: "0 8px 25px -4px rgba(182, 0, 168, 0.45)"
                }}
              >
                <Send className="h-4 w-4" />
                <span>Transmit Message</span>
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-xs font-light uppercase tracking-widest text-[#D7E2EA]/40">
          Designed & built by Mohammed Fakir · Casablanca · © {new Date().getFullYear()}
        </footer>
      </div>
    </section>
  );
}
