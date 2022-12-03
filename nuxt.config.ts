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
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-headlessui',
    'nuxt-icon',
  ],
  imports: {
    dirs: ['./stores'],
  },
  experimental: {
    reactivityTransform: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        translate: 'no',
      },
    },
  },
  css: [
    'assets/css/style.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  typescript: {
    shim: false,
  },
})
