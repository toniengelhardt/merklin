import type { TransactionResponse } from '@ethersproject/abstract-provider'
import { ethers } from 'ethers'

// https://docs.metamask.io/guide/ethereum-provider.html#table-of-contents
// https://docs.ethers.io/v5/getting-started/

let web3Provider: ethers.BrowserProvider
let web3Signer: ethers.JsonRpcSigner
let rpcProvider: ethers.JsonRpcProvider
let etherscanProvider: ethers.EtherscanProvider

// We need one default provider per network.
const defaultProviders: Partial<Record<NetworkName, ethers.Provider>> = {}

const network = 'homestead'

/**
 * Wallet provider, e.g. MetaMask.
 */
export async function useWeb3Provider() {
  if (!web3Provider) {
    web3Provider = new ethers.BrowserProvider((window as any).ethereum)
  }
  if (!web3Signer) {
    web3Signer = await web3Provider?.getSigner()
  }
  return { web3Provider, web3Signer }
}

/**
 * Default provider, connects to all APIs
 * https://docs.ethers.io/v5/api/providers/
 * Get free API keys and add them to your .env file (see .env.example).
 */
export async function useDefaultProvider(network: NetworkName) {
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

export async function useRpcProvider() {
  if (!rpcProvider) {
    const config = useRuntimeConfig()
    rpcProvider = new ethers.JsonRpcProvider(config.public.jsonRpcUrl)
  }
  return rpcProvider
}

/**
 * Etherscan provider
 * The only one that has the transaction history.
 */
export async function useEtherscanProvider() {
  if (!etherscanProvider) {
    const config = useRuntimeConfig()
    etherscanProvider = new ethers.EtherscanProvider(network, config.public.etherscanApiKey)
  }
  return etherscanProvider
}

export async function useTransactions() {
  const addressStore = useAddressStore()
  if (addressStore.activeAddresses.length) {
    console.log('Fetching transactions...')
    const etherscanProvider = await useEtherscanProvider()
    const transactions: TransactionResponse[] = await etherscanProvider.getHistory(addressStore.activeAddresses[0])
    return transactions
  }
  return Promise.resolve()
}

/**
 * TODO: Implement this!
 * Hardcoded for now for UI dev.
 */
export function useEthToCurrency(value: bigint | undefined) {
  if (value) {
    const priceStore = usePriceStore()
    const conversionFactor = priceStore.eth_usd || 0
    return value * BigInt(conversionFactor)
  }
}

export function useEthToCurrencyFormatted(value: bigint | undefined) {
  const cValue = useEthToCurrency(value)
  if (cValue) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cValue)
  }
}
