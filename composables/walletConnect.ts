import { InjectedConnector } from '@wagmi/core'
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask'
import { arbitrum, mainnet, optimism, polygon } from '@wagmi/core/chains'
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'

export const chains = [mainnet, optimism, arbitrum, polygon]

export const metamask = new MetaMaskConnector({ chains })
export const walletconnect = new WalletConnectConnector({
  chains,
  options: {
    qrcode: true,
  },
})
export const injectedWallet = new InjectedConnector({
  chains,
  options: {
    name: 'Injected',
    shimDisconnect: true,
  },
})
