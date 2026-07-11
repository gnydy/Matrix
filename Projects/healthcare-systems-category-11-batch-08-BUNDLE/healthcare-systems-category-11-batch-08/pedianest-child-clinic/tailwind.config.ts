import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: { boxShadow: { soft: '0 22px 70px rgba(15,23,42,0.10)' } } },
  plugins: []
};
export default config;
