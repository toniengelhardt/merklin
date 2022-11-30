export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],
  vite: {
    vue: {
      reactivityTransform: true,
    },
  },
  unocss: {
    uno: true,
    attributify: true,
    shortcuts: {
      'bg-base': 'bg-zinc-100 dark:bg-black',
      'bg-surface': 'bg-white dark:bg-zinc-800',
      'text-base': 'text-zinc-900 dark:text-zinc-200',
    },
  },
  colorMode: {
    classSuffix: '',
  },
  typescript: {
    shim: false,
  },
})
