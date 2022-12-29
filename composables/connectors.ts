import { InjectedConnector } from '@wagmi/core'
import { arbitrum, mainnet, optimism, polygon } from '@wagmi/core/chains'
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask'
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'

const chains = [mainnet, optimism, arbitrum, polygon]

let metaMaskConnector: MetaMaskConnector | undefined
let walletConnectConnector: WalletConnectConnector | undefined
let injectedConnector: InjectedConnector | undefined

export const useMetaMaskConnector = () => {
  if (!metaMaskConnector) {
    metaMaskConnector = new MetaMaskConnector({
      chains,
    })
  }
  return metaMaskConnector
}

export const useWalletConnectConnector = () => {
  if (!walletConnectConnector) {
    walletConnectConnector = new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    })
  }
  return walletConnectConnector
}

export const useInjectedConnector = () => {
  if (!injectedConnector) {
    injectedConnector = new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    })
  }
  return injectedConnector
}

export const useConnectors = () => {
  return {
    metamask: useMetaMaskConnector(),
    walletconnect: useWalletConnectConnector(),
    injectedWallet: useInjectedConnector(),
  }
}
