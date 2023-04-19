/**
 * Returns unformatted token price in currently selected currency.
 */
export function useTokenPrice(tokenName: TokenName) {
  const priceStore = usePriceStore()
  const identifier = `${tokenName}_${useCurrency().name}`
  return computed(() => priceStore[identifier as keyof typeof priceStore] as number | undefined)
}

/**
 * Returns formatted token price in currently selected currency.
 */
export function useTokenPriceFormatted(tokenName: TokenName) {
  const tp = useTokenPrice(tokenName)
  const currency = useCurrency()
  return computed(() => (
    tp.value
      ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency.ticker,
      })
        .format(tp.value)
      : 'N/A'
  ))
}
