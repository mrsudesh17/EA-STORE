/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#FFD700',
          dim: 'rgba(255,215,0,0.12)',
          border: 'rgba(255,215,0,0.2)',
          borderAlt: 'rgba(255,215,0,0.18)'
        },
        orange: {
          DEFAULT: '#FF6B35',
          dim: 'rgba(255,107,53,0.1)',
        },
        bg: {
          DEFAULT: '#080A0F',
          2: '#0E1118',
          3: '#131824',
        },
        card: '#111520',
        text: '#EAEAEA',
        muted: '#7A8499',
        green: {
          DEFAULT: '#22C55E'
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.07)'
        }
      },
      fontFamily: {
        heading: ['Rajdhani', 'sans-serif'],
        body: ['"Exo 2"', 'sans-serif'],
      },
      borderRadius: {
        theme: '14px'
      },
      animation: {
        'fade-up': 'fadeUp 0.65s ease both',
        'pulse-wa': 'pulseWa 2.5s ease infinite',
        'tick': 'tick 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseWa: {
          '0%, 100%': { boxShadow: '0 8px 24px rgba(37,211,102,.4)' },
          '50%': { boxShadow: '0 8px 32px rgba(37,211,102,.7), 0 0 0 8px rgba(37,211,102,.12)' },
        },
        tick: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
