import tailwindcss from '@tailwindcss/vite';
import { config } from '@laboratory/config';
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  vite: {
    plugins: [tailwindcss()],
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
  devServer: {
    port: Number(config.frontend_port ?? 3000)
  },
  runtimeConfig: {
    public: {
      frontend_port: String(config.frontend_port ?? 3000),
    }
  },
  modules: [
    '@nuxt/icon',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
  ],
})