/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#b30000",
        "primary-light": "#f20d0d",
        "bg-light": "#f8f5f5",
        "bg-dark": "#181111",
        "bg-black": "#0a0505",
        "background-light": "#fdfbfb",
        "background-dark": "#1a0505",
        "off-white": "#f4f1f1",
        "stone": "#e7e5e4"
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        sculpture: ["Cinzel", "serif"],
        news: ["Newsreader", "serif"],
        body: ["Noto Sans", "sans-serif"],
      },
      boxShadow: {
          "sculpture": "0 20px 50px -12px rgba(0, 0, 0, 0.25)",
          "inner-glow": "inset 0 0 20px rgba(0,0,0,0.05)"
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}