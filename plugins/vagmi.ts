import { VagmiPlugin, chain, configureChains, createClient } from 'vagmi'
import { publicProvider } from 'vagmi/providers/public'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const { provider, webSocketProvider } = configureChains(
    [
      chain.mainnet,
      chain.optimism,
      chain.arbitrum,
      chain.polygon,
    ],
    [publicProvider()],
  )
  const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
  })
  const vagmi = VagmiPlugin(client)
  nuxtApp.vueApp.use(vagmi)
})
