import GlobalPolyFill from '@esbuild-plugins/node-globals-polyfill'

export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      etherscanApiKey: process.env.ETHERSCAN_API_KEY,
      infuraApiKey: process.env.INFURA_API_KEY,
      alchemyApiKey: process.env.ALCHEMY_API_KEY,
      pocketApiKey: process.env.POCKET_API_KEY,
      ankrApiKey: process.env.ANKR_API_KEY,
      jsonRpcUrl: process.env.RPC_URL || 'https://eth-mainnet.g.alchemy.com/v2/n5Vj8wE2BHWCtpxqeIZZRJFMVyvifuYv',
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
      './stores',
    ],
  },
  experimental: {
    reactivityTransform: true,
  },
  vite: {
    define: {
      global: 'window',
    },
    resolve: {
      alias: {
        process: 'process/browser',
        stream: 'stream-browserify',
        zlib: 'browserify-zlib',
        util: 'util',
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis',
        },
        plugins: [
          GlobalPolyFill({
            process: true,
            buffer: true,
          }),
        ],
      },
    },
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
