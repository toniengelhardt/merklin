import type { TransactionResponse } from '@ethersproject/abstract-provider'
import { ethers } from 'ethers'

// https://docs.metamask.io/guide/ethereum-provider.html#table-of-contents
// https://docs.ethers.io/v5/getting-started/

let web3Provider: ethers.providers.Web3Provider
let web3Signer: ethers.providers.JsonRpcSigner
let rpcProvider: ethers.providers.JsonRpcProvider
let etherscanProvider: ethers.providers.EtherscanProvider

// We need one default provider per network.
const defaultProviders: Partial<Record<NetworkName, ethers.providers.BaseProvider>> = {}

const network = 'homestead'

/**
 * Wallet provider, e.g. MetaMask.
 */
export const useWeb3Provider = async () => {
  if (!web3Provider)
    web3Provider = new ethers.providers.Web3Provider((window as any).ethereum)
  if (!web3Signer)
    web3Signer = await web3Provider.getSigner()
  return { web3Provider, web3Signer }
}

/**
 * Default provider, connects to all APIs
 * https://docs.ethers.io/v5/api/providers/
 * Get free API keys and add them to your .env file (see .env.example).
 */
export const useDefaultProvider = async (network: NetworkName) => {
  if (!defaultProviders[network]) {
    const config = useRuntimeConfig()
    defaultProviders[network] = await ethers.getDefaultProvider(network, {
      etherscan: config.public.etherscanApiKey,
      infura: config.public.infuraApiKey,
      alchemy: config.public.alchemyApiKey,
      pocket: config.public.pocketApiKey,
      ankr: config.public.ankrApiKey,
    })
  }
  return defaultProviders[network]
}

export const useRpcProvider = async () => {
  if (!rpcProvider) {
    const config = useRuntimeConfig()
    rpcProvider = new ethers.providers.JsonRpcProvider(config.public.jsonRpcUrl)
  }
  return rpcProvider
}

/**
 * Etherscan provider
 * The only one that has the transaction history.
 */
export const useEtherscanProvider = async () => {
  if (!etherscanProvider) {
    const config = useRuntimeConfig()
    etherscanProvider = new ethers.providers.EtherscanProvider(network, config.public.etherscanApiKey)
  }
  return etherscanProvider
}

export const useTransactions = async () => {
  const wallet = useWalletStore()
  if (wallet.address && wallet.network) {
    console.log('Fetching transactions...')
    const etherscanProvider = await useEtherscanProvider()
    const transactions: TransactionResponse[] = await etherscanProvider.getHistory(wallet.address)
    return transactions
  }
  return Promise.resolve()
}

/**
 * TODO: Implement this!
 * Hardcoded for now for UI dev.
 */
export const useEthToCurrency = (value: number | undefined) => {
  if (value) {
    const priceStore = usePriceStore()
    const conversionFactor = priceStore.eth_usd || 0
    return value * conversionFactor
  }
}

export const useEthToCurrencyFormatted = (value: number | undefined) => {
  const cValue = useEthToCurrency(value)
  if (cValue) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cValue)
  }
}
