// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  srcDir: 'src/',
  ssr: false,
  app: {
    head: {
      title: "NPC Calculator",
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        },
        {
          rel: "manifest",
          href: "/site.webmanifest"
        }
      ],
      meta: [
        {
          name: "msapplication-TileColor",
          content: "#da532c"
        },
        {
          name: "theme-color",
          content: "#ffffff"
        }
      ]
    }
  },

  devtools: { enabled: true },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'nuxt-vuefire',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],

  i18n: {
    locales: ['en', 'es', 'ca', 'de', 'fr', 'pt', 'it'],
    defaultLocale: 'en'
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  vuefire: {
    config: {
      apiKey: "",
      authDomain: "logic-gear-apps.firebaseapp.com",
      projectId: "logic-gear-apps",
      storageBucket: "logic-gear-apps.appspot.com",
      messagingSenderId: "1082839337882",
      appId: "1:1082839337882:web:ee10fef641065416690823",
      measurementId: "G-8LGQ0QN5Y9"
    },
  },

  css: [
    '~/assets/styles/main.css',
  ],

  compatibilityDate: "2024-08-06",
})