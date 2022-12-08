import type { TransactionResponse } from '@ethersproject/abstract-provider'
import type { BigNumber } from 'ethers'
import { ethers, utils } from 'ethers'

// https://docs.metamask.io/guide/ethereum-provider.html#table-of-contents
// https://docs.ethers.io/v5/getting-started/

let web3Provider: ethers.providers.Web3Provider
let web3Signer: ethers.providers.JsonRpcSigner
let defaultProvider: ethers.providers.BaseProvider
let rpcProvider: ethers.providers.JsonRpcProvider
let etherscanProvider: ethers.providers.EtherscanProvider

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
export const useDefaultProvider = async () => {
  if (!defaultProvider) {
    const config = useRuntimeConfig()
    defaultProvider = await ethers.getDefaultProvider(network, {
      etherscan: config.public.etherscanApiKey,
      infura: config.public.infuraApiKey,
      alchemy: config.public.alchemyApiKey,
      pocket: config.public.pocketApiKey,
      ankr: config.public.ankrApiKey,
    })
  }
  return defaultProvider
}

export const useRpcProvider = async () => {
  if (!rpcProvider) {
    rpcProvider = new ethers.providers.JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/n5Vj8wE2BHWCtpxqeIZZRJFMVyvifuYv' || process.env.RPC_URL!)
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
  const rhStore = useRabbitholeStore()

  if (rhStore.account) {
    const etherscanProvider = await useEtherscanProvider()
    const transactions: TransactionResponse[] = await etherscanProvider.getHistory(rhStore.account.address)
    return transactions
  }
  return Promise.resolve()
}

export const useBlocknumber = () => {
  const blocknumber = ref<number | undefined>(undefined)
  const rhStore = useNetworkStore()
  useDefaultProvider()
    .then(() => {
      useIntervalFn(() => {
        defaultProvider.getBlockNumber()
          .then((bn: number) => {
            blocknumber.value = bn
            rhStore.status = 'connected'
          })
          .catch(() => {
            rhStore.status = 'error'
          })
      }, 5 * 1000, { immediate: true })
    })
    .catch(() => {})
  return blocknumber
}

export const useGasPrice = () => {
  const gasPrice = ref<number | undefined>(undefined)
  useDefaultProvider()
    .then(() => {
      useIntervalFn(() => {
        defaultProvider.getGasPrice()
          .then((gp: BigNumber) => gasPrice.value = Math.round(+utils.formatUnits(gp, 'gwei')))
          .catch(() => {})
      }, 5 * 1000)
    })
    .catch(() => {})
  return gasPrice
}

/**
 * TODO: Implement this!
 * Hardcoded for now for UI dev.
 */
export const useEthToCurrency = (value: number | undefined) => {
  if (value) {
    const priceStore = usePriceStore()
    const conversionFactor = priceStore.ethUsd || 0
    return value * conversionFactor
  }
}

export const useEthToCurrencyFormatted = (value: number | undefined) => {
  const cValue = useEthToCurrency(value)
  if (cValue) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cValue)
  }
}
