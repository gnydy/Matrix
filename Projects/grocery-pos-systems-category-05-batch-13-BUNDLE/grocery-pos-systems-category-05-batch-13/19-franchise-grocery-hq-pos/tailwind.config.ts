import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: { extend: { borderRadius: { '4xl': '2rem' } } },
  safelist: ['bg-emerald-600','bg-sky-600','bg-indigo-600','bg-amber-600','bg-lime-600','bg-rose-600','bg-orange-600','bg-cyan-600','bg-violet-600','bg-teal-600','bg-blue-600','bg-fuchsia-600','bg-green-600','bg-pink-600','bg-slate-700','bg-stone-700','bg-red-600','bg-purple-600','bg-yellow-600','bg-neutral-900','bg-black'],
  plugins: [],
};
export default config;
