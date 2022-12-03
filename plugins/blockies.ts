import VueBlockies from 'vue-blockies'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => nuxtApp.vueApp.component('IconBlockies', VueBlockies))
