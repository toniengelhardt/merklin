import { defineStore } from 'pinia'

export const usePriceStore = defineStore('prices', {
  state: (): {
    ethUsd: TokenPrice | undefined
    maticUsd: TokenPrice | undefined
    maticUsdHist: TokenPrice | undefined
  } => {
    return {
      ethUsd: undefined,
      maticUsd: undefined,
      maticUsdHist: undefined,
    }
  },
  actions: {
    async updateEthUsd() {
      const priceFeed = await useEthPriceFeed()
      const roundData = await priceFeed.latestRoundData()
      const decimals = await priceFeed.decimals()
      this.ethUsd = Number((roundData.answer.toString() / 10 ** decimals).toFixed(2))
    },
    async updateMaticUsd() {
      const priceFeed = await useMaticPriceFeed()
      const roundData = await priceFeed.latestRoundData()
      const decimals = await priceFeed.decimals()
      this.maticUsd = Number((roundData.answer.toString() / 10 ** decimals).toFixed(2))
    },
    async getMaticHistPrice() {
      const priceFeed = await useMaticPriceFeed()
      // We can loop through the roundId parameter to get the token price at each round, hardcoded as example
      const roundData = await priceFeed.getRoundData(55340232221128668506n)
      const decimals = await priceFeed.decimals()
      this.maticUsdHist = Number((roundData.answer.toString() / 10 ** decimals).toFixed(2))
    },
  },
  persist: {
    paths: [

    ],
  },
})
