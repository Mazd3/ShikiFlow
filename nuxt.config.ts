import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ['@nuxt/eslint', '@nuxtjs/i18n'],
  srcDir: 'app',
  serverDir: 'server',

  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'ru', language: 'ru', file: 'ru.json' },
      { code: 'en', language: 'en', file: 'en.json' },
    ],
    strategy: 'no_prefix',
    langDir: './../app/locales',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
    },
  },
  runtimeConfig: {
    shikiClientId: '',
    shikiClientSecret: '',
  },
})
