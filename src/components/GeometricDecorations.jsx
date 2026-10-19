import React from 'react';

export function GeometricShape({ variant = "diamond", className = "", float = "animate-float-slow" }) {
  const shadowStyle = {
    filter: "drop-shadow(0 0 35px rgba(182, 0, 168, 0.4)) drop-shadow(0 0 70px rgba(118, 33, 176, 0.25))"
  };

  if (variant === "sphere") {
    return (
      <div className={`${float} ${className}`} style={shadowStyle}>
        <div
          className="h-full w-full rounded-full transition-transform duration-500 hover:scale-105"
          style={{
            background: "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.7) 0%, #B600A8 35%, #7621B0 65%, #18011F 100%)",
            boxShadow: "inset -8px -8px 20px rgba(0,0,0,0.6), inset 4px 4px 10px rgba(255,255,255,0.4)"
          }}
        />
      </div>
    );
  }

  if (variant === "ring") {
    return (
      <div className={`${float} ${className}`} style={shadowStyle}>
        <div
          className="h-full w-full rounded-full animate-orb-spin"
          style={{
            background: "conic-gradient(from 40deg, #B600A8 0%, #7621B0 30%, #BBCCD7 55%, #00F0FF 75%, #B600A8 100%)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 22%), #000 calc(100% - 20%))",
            WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 22%), #000 calc(100% - 20%))"
          }}
        />
      </div>
    );
  }

  if (variant === "crescent") {
    return (
      <div className={`${float} ${className}`} style={shadowStyle}>
        <div
          className="h-full w-full rounded-full"
          style={{
            background: "radial-gradient(circle at 68% 35%, transparent 0%, transparent 44%, #7621B0 46%, #B600A8 72%, #18011F 100%)"
          }}
        />
      </div>
    );
  }

  // Diamond default
  return (
    <div className={`${float} ${className}`} style={shadowStyle}>
      <div
        className="h-full w-full rotate-45 rounded-[22%] transition-transform duration-500 hover:rotate-[55deg] hover:scale-110"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, #B600A8 30%, #7621B0 65%, #0F0214 100%)",
          boxShadow: "inset -5px -5px 15px rgba(0,0,0,0.7), inset 3px 3px 8px rgba(255,255,255,0.4)"
        }}
      />
    </div>
  );
}
