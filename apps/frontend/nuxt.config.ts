import tailwindcss from '@tailwindcss/vite';
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  vite: {
    plugins: [tailwindcss()]
  },
  css: ['~/assets/app.css'],
  icon: {
    provider: 'server',
    serverBundle: {
      collections: ['mingcute']
    },
    clientBundle: {
      scan: true,
      includeCustomCollections: true
    }
  },
  modules: [
    '@nuxt/icon',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
  ],
})