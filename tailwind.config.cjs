/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        dot: "url('./src/assets/imgs/dot.svg')",
      },
      backgroundSize: {
        "1rem": "2rem",
      },
      colors: {
        "black-dark": "#161616",
        black: "#1A1A1A",
        "black-light": "#242424",
        grey: "#8A8A8A",
      },
    },
  },
  plugins: [],
};
