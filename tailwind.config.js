/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0506',
        bgElevated: '#160c0e',
        bgCard: '#1c0f12',
        accent: '#c8273e',
        accentDeep: '#8a1a2b',
        accentSoft: '#ff8aa0',
        ink: '#f5eeee',
        muted: '#a99a9c',
        mutedDark: '#786669',
        line: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        glow: '0 0 60px rgba(200,39,62,0.35)',
        card: '0 20px 60px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
};
