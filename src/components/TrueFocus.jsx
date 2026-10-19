import React, { useState, useEffect, useRef } from 'react';

export default function TrueFocus({
  sentence = "LET'S TALK",
  manualMode = false,
  blurAmount = 4,
  borderColor = "#B600A8",
  glowColor = "rgba(182, 0, 168, 0.7)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1.2,
  className = "",
  wordClassName = "hero-heading"
}) {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [frameStyle, setFrameStyle] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });
  const wordRefs = useRef([]);

  useEffect(() => {
    wordRefs.current = wordRefs.current.slice(0, words.length);
  }, [words]);

  // Update frame position
  const updateFrame = (index) => {
    const el = wordRefs.current[index];
    if (el) {
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement.getBoundingClientRect();
      setFrameStyle({
        left: rect.left - parentRect.left - 6,
        top: rect.top - parentRect.top - 4,
        width: rect.width + 12,
        height: rect.height + 8,
        opacity: 1
      });
    }
  };

  useEffect(() => {
    updateFrame(currentIndex);
    const handleResize = () => updateFrame(currentIndex);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  useEffect(() => {
    if (manualMode) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);
    return () => clearInterval(interval);
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  return (
    <div className={`true-focus ${className}`}>
      {words.map((word, index) => {
        const isFocused = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            className={`true-focus__word cursor-target ${wordClassName}`}
            style={{
              filter: isFocused ? 'blur(0px)' : `blur(${blurAmount}px)`,
              opacity: isFocused ? 1 : 0.45,
              transform: isFocused ? 'scale(1.03)' : 'scale(0.98)',
              transitionDuration: `${animationDuration}s`,
            }}
            onMouseEnter={() => {
              setCurrentIndex(index);
              updateFrame(index);
            }}
          >
            {word}
          </span>
        );
      })}

      {/* Glowing animated frame */}
      <div
        className="true-focus__frame"
        style={{
          left: `${frameStyle.left}px`,
          top: `${frameStyle.top}px`,
          width: `${frameStyle.width}px`,
          height: `${frameStyle.height}px`,
          opacity: frameStyle.opacity,
          transition: `all ${animationDuration}s cubic-bezier(0.16, 1, 0.3, 1)`,
        }}
      >
        <span
          className="true-focus__corner true-focus__corner--top-left"
          style={{ borderColor, filter: `drop-shadow(0 0 6px ${glowColor})` }}
        />
        <span
          className="true-focus__corner true-focus__corner--top-right"
          style={{ borderColor, filter: `drop-shadow(0 0 6px ${glowColor})` }}
        />
        <span
          className="true-focus__corner true-focus__corner--bottom-left"
          style={{ borderColor, filter: `drop-shadow(0 0 6px ${glowColor})` }}
        />
        <span
          className="true-focus__corner true-focus__corner--bottom-right"
          style={{ borderColor, filter: `drop-shadow(0 0 6px ${glowColor})` }}
        />
      </div>
    </div>
  );
}
