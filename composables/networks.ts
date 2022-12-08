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
