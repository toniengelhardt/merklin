export const tokens: Record<TokenName, Token> = {
  btc: {
    name: 'btc',
    types: ['utility'],
    icon: 'bitcoin',
    ticker: 'BTC',
    label: 'BTC',
  },
  eth: {
    name: 'eth',
    types: ['utility'],
    icon: 'ethereum',
    ticker: 'ETH',
    label: 'ETH',
  },
  op: {
    name: 'op',
    types: ['governance'],
    icon: 'optimism',
    ticker: 'OP',
    label: 'OP',
  },
  matic: {
    name: 'matic',
    types: ['utility', 'governance'],
    icon: 'polygon',
    ticker: 'MATIC',
    label: 'MATIC',
  },
  dai: {
    name: 'dai',
    types: ['stable'],
    icon: 'dai',
    ticker: 'DAI',
    label: 'DAI',
  },
  xdai: {
    name: 'xdai',
    types: ['utility', 'stable'],
    icon: 'xdai',
    ticker: 'XDAI',
    label: 'XDAI',
  },
  gno: {
    name: 'gno',
    types: ['governance'],
    icon: 'gnosis',
    ticker: 'GNO',
    label: 'GNO',
  },
}

export const tokenColors: Record<TokenName, string> = {
  btc: '#F7931A',
  eth: '#627',
  op: '#F7931A',
  matic: '#F7931A',
  dai: '#F7931A',
  xdai: '#F7931A',
  gno: '#F7931A',
}

// Tokens to be displayed in feeds (ordererd)
export const tokenList: Token[] = [
  tokens.btc,
  tokens.eth,
  tokens.op,
  tokens.matic,
  tokens.dai,
  tokens.gno,
]
