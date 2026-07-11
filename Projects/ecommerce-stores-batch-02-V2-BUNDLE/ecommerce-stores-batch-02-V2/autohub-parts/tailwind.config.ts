import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './data/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2.5rem',
      },
      boxShadow: {
        glow: '0 0 80px rgba(99,102,241,.28)',
      }
    },
  },
  plugins: [],
};

export default config;
