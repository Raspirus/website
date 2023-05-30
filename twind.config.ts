import { Options } from "$fresh/plugins/twind.ts";
// For background image: https://daily-dev-tips.com/posts/tailwind-css-fullscreen-header-image/

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      backgroundImage: (_theme) => ({
        default: "url('/background.png')",
      }),
      colors: {
        transparent: "transparent",
        current: "currentColor",
        mainred: {
          light: "#ff5a83", //red-500-
          DEFAULT: "#ff3366", //red-600
          dark: "#ff0c49", //red-700+
        },
        maingreen: {
          light: "#35c091",
          DEFAULT: "#207357",
          dark: "#175440",
        },
      },
    },
  },
} as Options;
