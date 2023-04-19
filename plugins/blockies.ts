import VueBlockies from 'vue-blockies'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('IconBlockies', VueBlockies)
})
