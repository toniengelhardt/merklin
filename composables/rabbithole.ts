import type { BigNumber } from 'ethers'
import { ethers, utils } from 'ethers'

let web3: ethers.providers.Web3Provider
let signer: ethers.providers.JsonRpcSigner
let etherscanEth: ethers.providers.EtherscanProvider

export const useWeb3 = async () => {
  if (!web3)
    web3 = new ethers.providers.Web3Provider((window as any).ethereum)
  if (!signer)
    signer = web3.getSigner()
  return { web3, signer }
}

export const useEtherscanEth = async () => {
  if (!etherscanEth)
    etherscanEth = new ethers.providers.EtherscanProvider('homestead')
  return etherscanEth
}

export const useTransactions = async () => {
  const rabbitholeStore = useRabbitholeStore()
  if (rabbitholeStore.account) {
    const etherscanEth = await useEtherscanEth()
    return await etherscanEth.getHistory(rabbitholeStore.account.address)
  }
  return Promise.resolve()
}

export const useBlocknumber = () => {
  const blocknumber = ref<number | undefined>(undefined)
  useWeb3()
    .then(() => {
      useIntervalFn(() => {
        web3.getBlockNumber()
          .then((bn: number) => blocknumber.value = bn)
          .catch(() => {})
      }, 5 * 1000, { immediate: true })
    })
    .catch(() => {})
  return blocknumber
}

export const useGasPrice = () => {
  const gasPrice = ref<number | undefined>(undefined)
  useWeb3()
    .then(() => {
      useIntervalFn(() => {
        web3.getGasPrice()
          .then((gp: BigNumber) => gasPrice.value = Math.round(+utils.formatUnits(gp, 'gwei')))
          .catch(() => {})
      }, 5 * 1000)
    })
    .catch(() => {})
  return gasPrice
}
