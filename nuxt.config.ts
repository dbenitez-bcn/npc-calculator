// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
    head: {
      title: "NPC Calculator",
    }
  },
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxtjs/i18n',
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
    defaultLocale: 'en',
    strategy: 'prefix'
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  }
})
