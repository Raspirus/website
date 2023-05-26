import { Options } from "$fresh/plugins/twind.ts";
// For background image: https://daily-dev-tips.com/posts/tailwind-css-fullscreen-header-image/

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      backgroundImage: (_theme) => ({
        default: "url('/background.png')",
      }),
    }
  }
} as Options;
