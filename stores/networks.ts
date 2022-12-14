import { utils as ethersUtils } from 'ethers'
import { defineStore } from 'pinia'

export const useNetworkStore = defineStore('networks', {
  state: (): {
    ethereum: NetworkData
    optimism: NetworkData
    arbitrum: NetworkData
    polygon: NetworkData
    gnosis: NetworkData
    zksync: NetworkData
  } => {
    return {
      ethereum: {},
      optimism: {},
      arbitrum: {},
      polygon: {},
      gnosis: {},
      zksync: {},
    }
  },
  actions: {
    async updateBlocknumber() {
      try {
        const defaultProvider = await useDefaultProvider()
        this.ethereum.blocknumber = await defaultProvider.getBlockNumber()
        this.ethereum.status = 'connected'
      }
      catch {
        this.ethereum.status = 'error'
      }
      return Promise.resolve()
    },
    async updateGasPrice() {
      try {
        const defaultProvider = await useDefaultProvider()
        const gp = await defaultProvider.getGasPrice()
        this.ethereum.gasPrice = Math.round(+ethersUtils.formatUnits(gp, 'gwei'))
      }
      catch { }
      return Promise.resolve()
    },
    async updateNetworkData() {
      console.log('Updating networks (10s interval)')
      const res = await Promise.all([
        this.updateBlocknumber(),
        this.updateGasPrice(),
      ])
      return res
    },
  },
  persist: {
    paths: [

    ],
  },
})
