import GlobalPolyFill from '@esbuild-plugins/node-globals-polyfill'

const appTitle = 'm3tadata'
const appDescription = 'Open-source wallet explorer based on Vue/Nuxt'
const appUrl = 'https://m3tadata.vercel.app'

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
    '@kevinmarrec/nuxt-pwa',
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
  pwa: {
    manifest: {
      id: '/?standalone=true',
      name: appTitle,
      short_name: appTitle,
      description: appDescription,
      display: 'standalone',
      orientation: 'any',
      lang: 'en',
      start_url: '/?standalone=true',
      scope: '/',
      categories: ['utilities'],
    },
    meta: {
      name: appTitle,
      description: appDescription,
      mobileApp: true,
      mobileAppIOS: true,
      lang: 'en',
      favicon: false,
      ogType: 'website',
      ogSiteName: appTitle,
      ogTitle: appTitle,
      ogDescription: appDescription,
      ogUrl: appUrl,
      theme_color: '#000000',
    },
    icon: {
      source: 'icon.png',
      maskableSource: 'icon.maskable.png',
      maskablePadding: 0,
    },
  },
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
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', key: 'favicon' },
      ],
    },
  },
})
