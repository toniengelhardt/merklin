import { formatUnits } from 'ethers'
import { defineStore } from 'pinia'

export const useNetworkStore = defineStore('networks', {
  state: (): {
    activeNetworks: Network[] | undefined
    homestead: NetworkData
    optimism: NetworkData
    arbitrum: NetworkData
    matic: NetworkData
    gnosis: NetworkData
    zksync: NetworkData
  } => {
    return {
      activeNetworks: undefined,
      homestead: {},
      optimism: {},
      arbitrum: {},
      matic: {},
      gnosis: {},
      zksync: {},
    }
  },
  actions: {
    async updateHomesteadNetwork() {
      try {
        const provider = await useDefaultProvider('homestead')
        this.homestead.blocknumber = await provider!.getBlockNumber()
        const gp = await provider!.getGasPrice()
        this.homestead.gasPrice = +formatUnits(gp, 'gwei')
        this.homestead.status = 'connected'
      }
      catch {
        this.homestead.status = 'error'
      }
      return Promise.resolve()
    },
    async updateOptimismNetwork() {
      try {
        const provider = await useDefaultProvider('optimism')
        this.optimism.blocknumber = await provider!.getBlockNumber()
        const gp = await provider!.getGasPrice()
        this.optimism.gasPrice = +formatUnits(gp, 'gwei')
        this.optimism.status = 'connected'
      }
      catch {
        this.optimism.status = 'error'
      }
      return Promise.resolve()
    },
    async updateArbitrumNetwork() {
      try {
        const provider = await useDefaultProvider('arbitrum')
        this.arbitrum.blocknumber = await provider!.getBlockNumber()
        const gp = await provider!.getGasPrice()
        this.arbitrum.gasPrice = +formatUnits(gp, 'gwei')
        this.arbitrum.status = 'connected'
      }
      catch {
        this.arbitrum.status = 'error'
      }
      return Promise.resolve()
    },
    async updateMaticNetwork() {
      try {
        const provider = await useDefaultProvider('matic')
        this.matic.blocknumber = await provider!.getBlockNumber()
        const gp = await provider!.getGasPrice()
        this.matic.gasPrice = +formatUnits(gp, 'gwei')
        this.matic.status = 'connected'
      }
      catch {
        this.matic.status = 'error'
      }
      return Promise.resolve()
    },
    async updateNetworkData() {
      console.log('Updating networks (10s interval)')
      const res = await Promise.all([
        this.updateHomesteadNetwork(),
        this.updateOptimismNetwork(),
        this.updateArbitrumNetwork(),
        this.updateMaticNetwork(),
      ])
      return res
    },
  },
  persist: {
    paths: [

    ],
  },
})
