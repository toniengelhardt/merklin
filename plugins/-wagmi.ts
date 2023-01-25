import { configureChains, connect, createClient, disconnect } from '@wagmi/core'
import { arbitrum, mainnet, optimism, polygon } from '@wagmi/core/chains'
import { alchemyProvider } from '@wagmi/core/providers/alchemy'
import { infuraProvider } from '@wagmi/core/providers/infura'
import { publicProvider } from '@wagmi/core/providers/public'

// Check:
// https://wagmi.sh/core/providers/configuring-chains

export default defineNuxtPlugin((_nuxtApp) => {
  const config = useRuntimeConfig()
  const chains = [
    mainnet,
    optimism,
    arbitrum,
    polygon,
  ]
  const providers = [
    alchemyProvider({ apiKey: config.public.alchemyApiKey }),
    infuraProvider({ apiKey: config.public.infuraApiKey }),
    publicProvider(),
  ]
  // If the targetQuorum option is set to a value greater than 1,
  // it will dispatch interactions to multiple providers,
  // in which the responses are verified by comparing them to each other.
  // If the quorum is reached, then the result will be returned to the consumer.
  const targetQuorum = 1

  const { provider, webSocketProvider } = configureChains(
    chains,
    providers,
    { targetQuorum },
  )
  const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
  })
  return {
    provide: {
      wagmiClient: client,
      connect,
      disconnect,
    },
  }
})
