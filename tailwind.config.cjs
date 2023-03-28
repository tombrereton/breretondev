const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        dot: "url('/src/assets/imgs/dot.svg')",
      },
      backgroundSize: {
        "1rem": "2rem",
      },
      fontFamily: {
        sans: ["Catamaran"],
        body: ["Overpass", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        mono: ["PT Mono", ...defaultTheme.fontFamily.mono],
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        marquee2: "marquee2 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      colors: {
        "black-dark": "#161616",
        black: "#1A1A1A",
        "black-light": "#242424",
        grey: "#8A8A8A",
        "grey-light": "#9A9A9A",
        "grey-dark": "#585858",
        "grey-other": "#515151",
        white: "#E9E9E9",
      },
    },
  },
  plugins: [],
};
