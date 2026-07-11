import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: { soft: '0 20px 60px rgba(15, 23, 42, 0.10)' },
      borderRadius: { '4xl': '2rem' }
    },
  },
  plugins: [],
};
export default config;
