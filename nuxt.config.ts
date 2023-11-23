// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-font-loader'],
  fontLoader: {
    local: [
      {
        src: '/fonts/BatmanForeverAlternate.woff2',
        family: 'BatmanForever',
        weight: '400',
        style: 'normal',
        preload: true
      },
      {
        src: '/fonts/Graphik-Medium.woff2',
        family: 'Graphik',
        weight: '500',
        style: 'normal',
        preload: true
      },
      {
        src: '/fonts/Graphik-Regular.woff2',
        family: 'Graphik',
        weight: '400',
        style: 'normal',
        preload: true
      }
    ],
  }
})
