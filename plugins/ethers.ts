import { ethers } from 'ethers'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('ethers', { ethers })
  // nuxtApp.provide('ethersUtils ', { utils })
})
