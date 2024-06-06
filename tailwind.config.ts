import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'normal': ['futura-pt'],
        'bold': ['futura-pt-bold'],
      },
      colors: {
        'melo-blue': "#007089"
      }
    },
  },
  plugins: [],
};
export default config;
