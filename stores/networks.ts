import { utils as ethersUtils } from 'ethers'
import { defineStore } from 'pinia'

export const useNetworkStore = defineStore('networks', {
  state: (): {
    homestead: NetworkData
    optimism: NetworkData
    arbitrum: NetworkData
    matic: NetworkData
    gnosis: NetworkData
    zksync: NetworkData
  } => {
    return {
      homestead: {},
      optimism: {},
      arbitrum: {},
      matic: {},
      gnosis: {},
      zksync: {},
    }
  },
  actions: {
    async updateBlocknumber() {
      try {
        const defaultProvider = await useDefaultProvider()
        this.homestead.blocknumber = await defaultProvider.getBlockNumber()
        this.homestead.status = 'connected'
      }
      catch {
        this.homestead.status = 'error'
      }
      return Promise.resolve()
    },
    async updateGasPrice() {
      try {
        const defaultProvider = await useDefaultProvider()
        const gp = await defaultProvider.getGasPrice()
        this.homestead.gasPrice = Math.round(+ethersUtils.formatUnits(gp, 'gwei'))
      }
      catch { }
      return Promise.resolve()
    },
    async updateMaticGasPrice() {
      try {
        const maticProvider = await useMaticProvider()
        const gp = await maticProvider.getGasPrice()
        this.matic.gasPrice = Math.round(+ethersUtils.formatUnits(gp, 'gwei'))
        this.matic.status = 'connected'
      }
      catch { }
      return Promise.resolve()
    },
    async updateNetworkData() {
      console.log('Updating networks (10s interval)')
      const res = await Promise.all([
        this.updateBlocknumber(),
        this.updateGasPrice(),
        this.updateMaticGasPrice(),
      ])
      return res
    },
  },
  persist: {
    paths: [

    ],
  },
})
