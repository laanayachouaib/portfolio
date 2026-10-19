/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07080a',
          900: '#0d0f12',
          850: '#121414',
          800: '#181b20',
          purple: '#18011F',
        },
        accent: {
          purple: '#7621B0',
          magenta: '#B600A8',
          orange: '#BE4C00',
          cyan: '#00F0FF',
          text: '#D7E2EA',
        }
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        'orb-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 60px 10px rgba(182, 0, 168, 0.35), 0 0 140px 40px rgba(118, 33, 176, 0.22), inset 0 0 60px rgba(255, 255, 255, 0.08)',
          },
          '50%': {
            boxShadow: '0 0 80px 20px rgba(182, 0, 168, 0.55), 0 0 180px 60px rgba(118, 33, 176, 0.35), inset 0 0 70px rgba(255, 255, 255, 0.15)',
          },
        },
        'orb-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        }
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'orb-pulse': 'orb-pulse 4s ease-in-out infinite',
        'orb-spin': 'orb-spin 25s linear infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
