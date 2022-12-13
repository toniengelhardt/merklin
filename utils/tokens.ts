export const tokens: Record<TokenName, Token> = {
  eth: {
    name: 'eth',
    type: 'utility',
    icon: 'ethereum',
    ticker: 'ETH',
    label: 'ETH',
  },
  op: {
    name: 'op',
    type: 'governance',
    icon: 'optimism',
    ticker: 'OP',
    label: 'OP',
  },
  matic: {
    name: 'matic',
    type: 'utility',
    icon: 'polygon',
    ticker: 'MATIC',
    label: 'MATIC',
  },
  xdai: {
    name: 'xdai',
    type: ['utility', 'stable'],
    icon: 'xdai',
    ticker: 'XDAI',
    label: 'xDAI',
  },
  gno: {
    name: 'gno',
    type: 'governance',
    icon: 'gnosis',
    ticker: 'GNO',
    label: 'GNO',
  },
}

// Tokens to be displayed in feeds (ordererd)
export const tokenList: Token[] = [
  tokens.eth,
  tokens.matic,
  tokens.xdai,
  tokens.op,
  tokens.gno,
]
