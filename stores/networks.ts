import { utils } from 'ethers'
import { defineStore } from 'pinia'

export const useNetworkStore = defineStore('networks', {
  state: (): {
    activeNetwork: NetworkName | undefined
    blocknumber: number | undefined
    status: ConnectionStatus | undefined
    ethereum: NetworkData
    optimism: NetworkData
    arbitrum: NetworkData
    zksync: NetworkData
    polygon: NetworkData
    gnosis: NetworkData
  } => {
    return {
      activeNetwork: undefined,
      blocknumber: undefined,
      status: undefined,
      ethereum: {},
      optimism: {},
      arbitrum: {},
      zksync: {},
      polygon: {},
      gnosis: {},
    }
  },
  actions: {
    async updateBlocknumber() {
      try {
        const defaultProvider = await useDefaultProvider()
        this.blocknumber = await defaultProvider.getBlockNumber()
        this.status = 'connected'
      }
      catch {
        this.status = 'error'
      }
      return Promise.resolve()
    },
    async updateGasPrice() {
      try {
        const defaultProvider = await useDefaultProvider()
        const gp = await defaultProvider.getGasPrice()
        this.ethereum.gasPrice = Math.round(+utils.formatUnits(gp, 'gwei'))
      }
      catch { }
      return Promise.resolve()
    },
  },
  persist: {
    paths: [

    ],
  },
})
