import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF7F1',
          100: '#F6EFE4',
          200: '#EFE2CD',
        },
        night: {
          500: '#1E2A44',
          700: '#141C2E',
          900: '#0B101C',
        },
        dawn: {
          400: '#F4A261',
          500: '#E07A3B',
          600: '#C65A28',
        },
        terra: {
          400: '#D97A5A',
          500: '#B85A3F',
        },
        gold: {
          400: '#D4B068',
          500: '#B88C42',
        },
        ink: {
          700: '#2A2F3A',
          900: '#1A1D24',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 10vw, 10rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(3rem, 7vw, 6.5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2.25rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
      },
      spacing: {
        'section': 'clamp(6rem, 12vw, 12rem)',
        'section-lg': 'clamp(8rem, 16vw, 16rem)',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'apple-in': 'cubic-bezier(0.7, 0, 0.84, 0)',
      },
      maxWidth: {
        'prose-narrow': '65ch',
        'content': '1280px',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
