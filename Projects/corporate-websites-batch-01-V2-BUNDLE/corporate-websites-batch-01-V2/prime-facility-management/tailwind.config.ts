import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { boxShadow: { glow: "0 24px 80px rgba(15,23,42,.16)" } } },
  plugins: [],
};
export default config;
