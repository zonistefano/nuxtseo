// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  site: {
    url: 'https://example.com',
    description: 'Welcome to my awesome site!',
    defaultLocale: 'en',
  },
  modules: ['@nuxtjs/i18n', "@nuxtjs/seo"],
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en",
        dir: "ltr",
        file: "en.ts",
      },
      {
        code: "it",
        name: "Italiano",
        iso: "it",
        dir: "ltr",
        file: "it.ts",
      }
    ],
    defaultLocale: "en",
    detectBrowserLanguage: false,
    lazy: true,
    langDir: "locales",
    strategy: "prefix_and_default",
    vueI18n: "./config/i18n.ts",
    baseUrl: "https://example.com",
  },
})