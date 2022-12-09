import { defineStore } from 'pinia'

export const usePriceStore = defineStore('prices', {
  state: (): {
    ethUsd: TokenPrice | undefined
    maticUsd: TokenPrice | undefined
    maticUsdHist: TokenPrice | undefined
    opUsd: TokenPrice | undefined
    xdaiUsd: TokenPrice | undefined
  } => {
    return {
      ethUsd: undefined,
      maticUsd: undefined,
      maticUsdHist: undefined,
      opUsd: undefined,
      xdaiUsd: undefined,
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
    async updateOpUsd() {
      const priceFeed = await useOptimismPriceFeed()
      const roundData = await priceFeed.latestRoundData()
      const decimals = await priceFeed.decimals()
      this.opUsd = Number((roundData.answer.toString() / 10 ** decimals).toFixed(2))
    },
    async updateXdaiUsd() {
      const priceFeed = await useDaiPriceFeed()
      const roundData = await priceFeed.latestRoundData()
      const decimals = await priceFeed.decimals()
      this.xdaiUsd = Number((roundData.answer.toString() / 10 ** decimals).toFixed(2))
    },
    async getMaticHistPrice() {
      const priceFeed = await useMaticPriceFeed()
      // We can loop through the roundId parameter to get the token price at each round, hardcoded as example
      const roundData = await priceFeed.getRoundData(BigInt('55340232221128668506'))
      const decimals = await priceFeed.decimals()
      this.maticUsdHist = Number((roundData.answer.toString() / 10 ** decimals).toFixed(2))
    },
  },
  persist: {
    paths: [

    ],
  },
})
