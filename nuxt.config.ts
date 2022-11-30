export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],
  experimental: {
    reactivityTransform: true,
  },
  colorMode: {
    classSuffix: '',
  },
  typescript: {
    shim: false,
  },
})
