export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      etherscanApiKey: process.env.ETHERSCAN_API_KEY,
      infuraApiKey: process.env.INFURA_API_KEY,
      alchemyApiKey: process.env.ALCHEMY_API_KEY,
      pocketApiKey: process.env.POCKET_API_KEY,
      ankrApiKey: process.env.ANKR_API_KEY,
      repoUrl: 'https://github.com/toniengelhardt/m3tadata',
      twitterUrl: '',
      discordUrl: '',
    },
  },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/plausible',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-headlessui',
    'nuxt-icon',
  ],
  imports: {
    dirs: [
      './node_modules/vagmi/composables',
      './stores',
    ],
  },
  experimental: {
    reactivityTransform: true,
  },
  typescript: {
    shim: false,
  },
  css: [
    'assets/css/style.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  plausible: {
    domain: process.env.PLAUSIBLE_DOMAIN || '',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        translate: 'no',
      },
    },
  },
})
