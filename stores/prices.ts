import { defineStore } from 'pinia'

export const usePriceStore = defineStore('prices', {
  state: (): {
    eth_usd: TokenPrice | undefined
    op_usd: TokenPrice | undefined
    matic_usd: TokenPrice | undefined
    // matic_usd_hist: TokenPrice | undefined
    dai_usd: TokenPrice | undefined
    xdai_usd: TokenPrice | undefined
  } => {
    return {
      eth_usd: undefined,
      op_usd: undefined,
      matic_usd: undefined,
      // matic_usd_hist: undefined,
      dai_usd: undefined,
      xdai_usd: undefined,
    }
  },
  actions: {
    async updateTokenPrice(marketPair: MarketPair) {
      const priceFeed = await usePriceFeed(marketPair)
      const roundData = await priceFeed.latestRoundData()
      const decimals = await priceFeed.decimals()
      const price = Number((roundData.answer.toString() / 10 ** decimals).toFixed(2))
      this[marketPair as keyof typeof this] = price

      // Directly populate xdai price from dai price
      if (marketPair === 'dai_usd') {
        this.xdai_usd = price
      }
    },
    // async getMaticHistPrice() {
    //   const priceFeed = await useMaticPriceFeed()
    //   // We can loop through the roundId parameter to get the token price at each round, hardcoded as example
    //   const roundData = await priceFeed.getRoundData(BigInt('55340232221128668506'))
    //   const decimals = await priceFeed.decimals()
    //   this.maticUsdHist = Number((roundData.answer.toString() / 10 ** decimals).toFixed(2))
    // },
    async updatePriceData() {
      console.log('Updating prices (60s interval)')
      const marketPairs: MarketPair[] = [
        'btc_usd',
        'eth_usd',
        // 'op_usd',
        'matic_usd',
        'dai_usd',
        'gno_usd',
      ]
      return await Promise.all(marketPairs.map(marketPair => this.updateTokenPrice(marketPair)))
    },
  },
  persist: {
    paths: [

    ],
  },
})
