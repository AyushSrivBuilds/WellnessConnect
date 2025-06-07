// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/apollo',
    '@vite-pwa/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.NUXT_GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql'
      }
    }
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Wellness Connect',
      short_name: 'WellnessConnect',
      description: 'Connect with wellness professionals near you',
      theme_color: '#10b981',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: '/icon-192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module'
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Wellness Connect - Find Your Perfect Wellness Professional',
      meta: [
        { name: 'description', content: 'Connect with certified yoga instructors, wellness coaches, and nutritionists in your area.' },
        { name: 'keywords', content: 'yoga, wellness, nutrition, coaching, fitness, health' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3001/api',
      graphqlEndpoint: process.env.NUXT_GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql'
    }
  }
})