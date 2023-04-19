import CryptoIcon from 'vue-cryptoicon/src/components/Cryptoicon'
import icon from 'vue-cryptoicon/src/icons'

export default defineNuxtPlugin((nuxtApp) => {
  CryptoIcon.add(icon)
  nuxtApp.vueApp.component('CryptoIcon', CryptoIcon)
})
