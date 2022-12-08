const transactionGasLimit: Record<NetworkName, number> = {
  ethereum: 21000,
  optimism: 0,
  arbitrum: 0,
  zksync: 0,
  polygon: 0,
  gnosis: 0,
}

/**
 * Returns unformatted token price in currently selected currency.
 */
export const useTokenPrice = (tokenName: TokenName) => {
  const priceStore = usePriceStore()
  const identifier = tokenName + useCapitalize(useCurrency().name)
  return computed(() => priceStore[identifier as keyof typeof priceStore])
}

/**
 * Returns formatted token price in currently selected currency.
 */
export const useTokenPriceFormatted = (tokenName: TokenName) => {
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

export const useGasPrice = (networkName: NetworkName) => {
  const networkStore = useNetworkStore()
  return computed(() => (networkStore[networkName as keyof typeof networkStore]! as NetworkData).gasPrice)
}

export const useGasPriceFormatted = (networkName: NetworkName) => {
  const gp = useGasPrice(networkName)
  return computed(() => gp.value ? `${gp.value} gwei` : 'N/A')
}

export const useTransactionCost = (networkName: NetworkName) => {
  const gp = useGasPrice(networkName)
  return computed(() => gp.value ? gp.value * transactionGasLimit[networkName] : undefined)
}

export const useTransactionCostFormatted = (networkName: NetworkName) => {
  const tc = useTransactionCost(networkName)
  const currency = useCurrency()
  return computed(() => (
    tc.value
      ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency.ticker,
      })
        .format(tc.value)
      : 'N/A'
  ))
}
