import React from 'react';

const TECH_STACK = [
  { name: 'React 19', path: '/react/react-original.svg' },
  { name: 'TypeScript', path: '/typescript/typescript-original.svg' },
  { name: 'Node.js', path: '/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', path: '/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { name: 'MySQL', path: '/mysql/mysql-original.svg' },
  { name: 'Python', path: '/python/python-original.svg' },
  { name: 'Java & Spring', path: '/java/java-original.svg' },
  { name: 'Docker', path: '/docker/docker-original.svg' },
  { name: 'Git', path: '/git/git-original.svg' },
  { name: 'Flutter', path: '/flutter/flutter-original.svg' },
  { name: 'Ollama (LLMs)', path: '/jupyter/jupyter-original.svg' },
  { name: 'Power BI', path: '/scikitlearn/scikitlearn-original.svg' },
];

export default function LogoMarquee() {
  const duplicated = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="relative w-full py-8 overflow-hidden select-none border-y border-white/[0.06] bg-[#050507]/60 backdrop-blur-md">
      {/* Edge gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 sm:w-48 z-10 bg-gradient-to-r from-[#050507] via-[#050507]/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 sm:w-48 z-10 bg-gradient-to-l from-[#050507] via-[#050507]/80 to-transparent" />

      <div className="logoloop">
        <div className="logoloop__track flex items-center gap-10 sm:gap-14">
          {duplicated.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="group flex items-center gap-2.5 px-3 py-1.5 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/[0.03] transition-all duration-200 cursor-default"
            >
              <img
                src={tech.path}
                alt={tech.name}
                className="h-5 w-5 object-contain opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                loading="lazy"
              />
              <span className="font-mono text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
