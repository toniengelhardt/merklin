const currencies = {
  usd: {
    name: 'usd',
    label: 'US Dollar',
    ticker: 'USD',
    symbol: '$',
  },
  eur: {
    name: 'eur',
    label: 'Euro',
    ticker: 'EUR',
    symbol: '€',
  },
}

export function useCurrency() {
  // For now static, but should eventually be wired to the selector.
  return currencies.usd
}
