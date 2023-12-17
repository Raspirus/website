// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { shim: false },
  modules: [
    '@nuxt/ui',
    'nuxt-icon',
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
    '@nuxt/image',
  ],
  ui: {
    safelistColors: ['primary', 'secondary'],
  }
})

// https://nuxt.com/modules/icon
// https://nuxt.com/modules/robots
// https://nuxt.com/modules/simple-sitemap

// https://nuxt.com/modules/partytown
// https://nuxt.com/modules/animejs
