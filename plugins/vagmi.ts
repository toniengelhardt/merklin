import { getDefaultProvider } from 'ethers'
import { VagmiPlugin, /* chain, configureChains, */ createClient } from 'vagmi'
// import { publicProvider } from 'vagmi/providers/public'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  // const { webSocketProvider } = configureChains(
  //   [
  //     chain.mainnet,
  //     chain.optimism,
  //     chain.arbitrum,
  //     chain.polygon,
  //   ],
  //   [publicProvider()],
  // )
  const client = createClient({
    autoConnect: true,
    provider: getDefaultProvider(),
    // webSocketProvider,
  })
  const vagmi = VagmiPlugin(client)
  nuxtApp.vueApp.use(vagmi)
})
