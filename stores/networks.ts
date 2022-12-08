import { utils } from 'ethers'
import { defineStore } from 'pinia'

export const useNetworkStore = defineStore('networks', {
  state: (): {
    network: Web3Network | undefined
    blocknumber: number | undefined
    status: ConnectionStatus | undefined
    gasPrice: number | null | undefined
  } => {
    return {
      network: undefined,
      blocknumber: undefined,
      status: undefined,
      gasPrice: undefined,
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
        this.gasPrice = Math.round(+utils.formatUnits(gp, 'gwei'))
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
