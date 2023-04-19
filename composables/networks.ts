export function useBlockNumber(networkName: NetworkName, naValue = 'N/A') {
  const networkStore = useNetworkStore()
  return computed(() => {
    const network = networkStore[networkName as keyof typeof networkStore] as NetworkData | undefined
    return network?.blocknumber || naValue
  })
}

/**
 * Returns gas price for the network in gwei.
 * @param networkName
 */
export function useGasPrice(networkName: NetworkName) {
  const networkStore = useNetworkStore()
  return computed(() => {
    const network = networkStore[networkName as keyof typeof networkStore] as NetworkData | undefined
    return network?.gasPrice
  })
}

export function useGasPriceFormatted(networkName: NetworkName, naValue = 'N/A', includeUnit = false) {
  const gp = useGasPrice(networkName)
  return computed(() => (
    (gp.value !== undefined && gp.value !== null)
      ? (+gp.value < 1 ? gp.value.toPrecision(1) : Math.round(gp.value)) + (includeUnit ? ' gwei' : '')
      : naValue
  ))
}

export function useTransactionCost(networkName: NetworkName) {
  const tokenPrice = useTokenPrice(networks[networkName].token?.name as TokenName)
  const gp = useGasPrice(networkName)
  return computed(() => (tokenPrice.value && gp.value) ? gp.value * transactionGasLimit[networkName] / 1e9 * tokenPrice.value : undefined)
}

export function useTransactionCostFormatted(networkName: NetworkName, naValue = 'N/A') {
  const tc = useTransactionCost(networkName)
  const currency = useCurrency()
  return computed(() => (
    tc.value
      ? `${tc.value < 0.01 ? '< ' : ''}${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency.ticker,
      })
        .format(tc.value)}`
      : naValue
  ))
}
