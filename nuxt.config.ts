// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  // devtools: { enabled: true },

  app: {
    head: {
      title: 'Aundre Kerr',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'og:image', property: 'og:image', content: '/og_image.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://use.typekit.net/krp6caz.css'
        }
      ]
    },
  },
  css: [
    '~/assets/css/main.css',
  ],
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", '@nuxt/content'],
  tailwindcss: {
    configPath: 'tailwind.config',
  },
  content: {
    api: {
      baseURL: '/api/works'
    }
  }
})