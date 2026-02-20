/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'water-surge': {
          '0%, 100%': { clipPath: 'polygon(0% 48%, 15% 44%, 35% 54%, 55% 46%, 75% 58%, 90% 48%, 100% 52%, 100% 100%, 0% 100%)' },
          '50%': { clipPath: 'polygon(0% 54%, 20% 58%, 45% 48%, 65% 55%, 85% 44%, 95% 58%, 100% 50%, 100% 100%, 0% 100%)' },
        },
        'mist-up': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '30%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-300px) scale(0.3)', opacity: '0' },
        },
        wave: {
          '0%, 100%': { clipPath: 'polygon(0 45%, 15% 40%, 30% 45%, 45% 55%, 60% 50%, 75% 40%, 90% 45%, 100% 50%, 100% 100%, 0 100%)' },
          '50%': { clipPath: 'polygon(0 50%, 15% 55%, 30% 50%, 45% 40%, 60% 45%, 75% 55%, 90% 50%, 100% 45%, 100% 100%, 0 100%)' },
        },
        'float-particle': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '20%': { opacity: '0.5' },
          '80%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-800px)', opacity: '0' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'water-surge': 'water-surge 3s ease-in-out infinite',
        'mist-up': 'mist-up linear infinite',
        wave: 'wave 4s ease-in-out infinite',
        'float-particle': 'float-particle linear infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
    },
  },
  plugins: [],
};
