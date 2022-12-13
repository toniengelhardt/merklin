export const useGasPrice = (networkName: NetworkName) => {
  const networkStore = useNetworkStore()
  return computed(() => (networkStore[networkName as keyof typeof networkStore]! as NetworkData).gasPrice)
}

export const useGasPriceFormatted = (networkName: NetworkName, naValue = 'N/A') => {
  const gp = useGasPrice(networkName)
  return computed(() => gp.value ? `${gp.value} gwei` : naValue)
}

export const useTransactionCost = (networkName: NetworkName) => {
  const gp = useGasPrice(networkName)
  return computed(() => gp.value ? gp.value / 1000000 * transactionGasLimit[networkName] : undefined)
}

export const useTransactionCostFormatted = (networkName: NetworkName, naValue = 'N/A') => {
  const tc = useTransactionCost(networkName)
  const currency = useCurrency()
  return computed(() => (
    tc.value
      ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency.ticker,
      })
        .format(tc.value)
      : naValue
  ))
}
