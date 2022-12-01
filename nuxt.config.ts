export default defineNuxtConfig({
  ssr: false,
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
