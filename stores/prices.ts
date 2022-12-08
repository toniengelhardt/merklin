import { defineStore } from 'pinia'

export const usePriceStore = defineStore('prices', {
  state: (): {
    ethUsd: TokenPrice | undefined
  } => {
    return {
      ethUsd: undefined,
    }
  },
  actions: {
    async updateEthUsd() {
      const priceFeed = await useEthPriceFeed()
      const roundData = await priceFeed.latestRoundData()
      const decimals = await priceFeed.decimals()
      this.ethUsd = Number((roundData.answer.toString() / 10 ** decimals).toFixed(2))
    },
  },
  persist: {
    paths: [

    ],
  },
})
