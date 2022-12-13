export const tokens: Record<TokenName, Token> = {
  eth: {
    name: 'eth',
    type: 'util',
    icon: 'ethereum',
    ticker: 'ETH',
    label: 'ETH',
  },
  op: {
    name: 'op',
    type: 'gov',
    icon: 'optimism',
    ticker: 'OP',
    label: 'OP',
  },
  matic: {
    name: 'matic',
    type: 'util',
    icon: 'polygon',
    ticker: 'MATIC',
    label: 'MATIC',
  },
  xdai: {
    name: 'xdai',
    type: ['util', 'stable'],
    icon: 'xdai',
    ticker: 'XDAI',
    label: 'xDAI',
  },
  gno: {
    name: 'gno',
    type: 'gov',
    icon: 'gnosis',
    ticker: 'GNO',
    label: 'GNO',
  },
}

// Tokens to be displayed in feeds (ordererd)
export const tokenList: Token[] = [
  tokens.eth, // utility
  tokens.matic, // utility
  tokens.xdai, // utility
  tokens.op, // gov
  tokens.gno, // gov
]
