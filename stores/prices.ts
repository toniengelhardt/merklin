import { defineStore } from 'pinia'

export const usePriceStore = defineStore('prices', {
  state: (): {
    ethUsd: TokenPrice | undefined
    polygonEthUsd: TokenPrice | undefined
    historicPolygonPrice: TokenPrice | undefined
  } => {
    return {
      ethUsd: undefined,
      polygonEthUsd: undefined,
      historicPolygonPrice: undefined,
    }
  },
  actions: {
    async updateEthUsd() {
      const priceFeed = await useEthPriceFeed()
      const roundData = await priceFeed.latestRoundData()
      const decimals = await priceFeed.decimals()
      this.ethUsd = Number((roundData.answer.toString() / 10 ** decimals).toFixed(2))
    },
    async updatePolygonEthUsd() {
      const priceFeed = await usePolygonPriceFeed()
      const roundData = await priceFeed.latestRoundData()
      const decimals = await priceFeed.decimals()
      this.polygonEthUsd = Number((roundData.answer.toString() / 10 ** decimals).toFixed(2))
    },
    async getHistoricPolygonPrice() {
      const priceFeed = await usePolygonPriceFeed()
      // We can loop through the roundId parameter to get the token price at each round, hardcoded as example
      const roundData = await priceFeed.getRoundData(55340232221128668506n)
      const decimals = await priceFeed.decimals()
      this.historicPolygonPrice = Number((roundData.answer.toString() / 10 ** decimals).toFixed(2))
    },
  },
  persist: {
    paths: [

    ],
  },
})
