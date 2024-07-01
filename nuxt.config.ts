// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { shim: false },
  modules: [
    '@nuxt/ui',
    'nuxt-icon',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/image',
    'nuxt-gtag',
  ],
  ui: {
    safelistColors: ['primary', 'secondary'],
  },
  gtag: {
    id: 'G-VE0JJVDNXY'
  }
})

// https://nuxt.com/modules/icon
// https://nuxt.com/modules/robots

// https://nuxt.com/modules/partytown
// https://nuxt.com/modules/animejs
