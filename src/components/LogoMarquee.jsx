import React from 'react';

const TECH_STACK = [
  { name: 'Python', path: '/python/python-original.svg' },
  { name: 'PyTorch', path: '/pytorch/pytorch-original.svg' },
  { name: 'TensorFlow', path: '/tensorflow/tensorflow-original.svg' },
  { name: 'Scikit-Learn', path: '/scikitlearn/scikitlearn-original.svg' },
  { name: 'LangChain / RAG', path: '/jupyter/jupyter-original.svg' },
  { name: 'React', path: '/react/react-original.svg' },
  { name: 'Node.js', path: '/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', path: '/typescript/typescript-original.svg' },
  { name: '.NET Core', path: '/dotnetcore/dotnetcore-original.svg' },
  { name: 'SQL Server', path: '/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { name: 'MongoDB', path: '/mongodb/mongodb-original.svg' },
  { name: 'MySQL', path: '/mysql/mysql-original.svg' },
  { name: 'Docker', path: '/docker/docker-original.svg' },
  { name: 'Git', path: '/git/git-original.svg' },
  { name: 'Flutter', path: '/flutter/flutter-original.svg' },
  { name: 'Java', path: '/java/java-original.svg' },
];

export default function LogoMarquee() {
  const duplicated = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="relative w-full py-8 overflow-hidden select-none border-y border-white/[0.06] bg-black/40 backdrop-blur-md">
      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-[#0a0b0d] via-[#0a0b0d]/70 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-[#0a0b0d] via-[#0a0b0d]/70 to-transparent" />

      <div className="logoloop">
        <div className="logoloop__track flex items-center gap-10 sm:gap-14">
          {duplicated.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#B600A8]/40 hover:bg-[#B600A8]/10 transition-all duration-300 cursor-pointer"
            >
              <img
                src={tech.path}
                alt={tech.name}
                className="h-6 w-6 sm:h-7 sm:w-7 object-contain filter drop-shadow group-hover:scale-115 transition-transform duration-300"
                loading="lazy"
              />
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#D7E2EA]/75 group-hover:text-white transition-colors duration-200">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
