import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        maingreen: {
          50: "#effaf5",
          100: "#d9f2e4",
          200: "#b6e4ce",
          300: "#86cfb0",
          400: "#54b38d",
          500: "#319873",
          600: "#207357",
          700: "#1b614b",
          800: "#184d3d",
          900: "#144033",
          950: "#0a241d",
        },
        mainred: {
          50: "#fff0f2",
          100: "#ffe2e7",
          200: "#ffcad5",
          300: "#ff9fb3",
          400: "#ff698b",
          500: "#ff3366",
          600: "#ed1152",
          700: "#c80846",
          800: "#a80942",
          900: "#8f0c3e",
          950: "#50011d",
        },
        darkbg: "#1c1b22",
      },
    },
  },
} satisfies Config;
