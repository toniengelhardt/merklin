const ethTransactionGasLimit = 21000

/**
 * Returns unformatted token price in currently selected currency.
 */
export const useEthTokenPrice = () => {
  const priceStore = usePriceStore()
  return computed(() => priceStore.ethUsd)
}

/**
 * Returns formatted token price in currently selected currency.
 */
export const useEthTokenPriceFormatted = () => {
  const tp = useEthTokenPrice()
  const currency = useCurrency()
  return computed(() => (
    tp.value
      ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency.abbr,
      })
        .format(tp.value)
      : 'N/A'
  ))
}

export const useEthGasPrice = () => {
  const networkStore = useNetworkStore()
  return computed(() => networkStore.gasPrice)
}

export const useEthGasPriceFormatted = () => {
  const gp = useEthGasPrice()
  return computed(() => gp.value ? `${gp.value} gwei` : 'N/A')
}

export const useEthTransactionCost = () => {
  const gp = useEthGasPrice()
  return computed(() => gp.value ? gp.value * ethTransactionGasLimit : undefined)
}

export const useEthTransactionCostFormatted = () => {
  const tc = useEthTransactionCost()
  const currency = useCurrency()
  return computed(() => (
    tc.value
      ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency.abbr,
      })
        .format(tc.value)
      : 'N/A'
  ))
}
