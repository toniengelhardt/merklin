import type { BigNumber } from 'ethers'
import { ethers, utils } from 'ethers'

// https://docs.metamask.io/guide/ethereum-provider.html#table-of-contents
// https://docs.ethers.io/v5/getting-started/

let web3Provider: ethers.providers.Web3Provider
let web3Signer: ethers.providers.JsonRpcSigner
let defaultProvider: ethers.providers.BaseProvider
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
  const rabbitholeStore = useRabbitholeStore()

  if (rabbitholeStore.account) {
    const etherscanProvider = await useEtherscanProvider()
    return await etherscanProvider.getHistory(rabbitholeStore.account.address)
  }
  return Promise.resolve()
}

export const useBlocknumber = () => {
  const blocknumber = ref<number | undefined>(undefined)
  const rhStore = useRabbitholeStore()
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
