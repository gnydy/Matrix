import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: { extend: { boxShadow: { glow: "0 24px 80px rgba(15, 23, 42, 0.45)" } } },
  plugins: []
};
export default config;
