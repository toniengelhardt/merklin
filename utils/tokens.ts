export const tokens: Record<TokenName, Token> = {
  eth: {
    name: 'eth',
    icon: 'ethereum',
    ticker: 'ETH',
    label: 'ETH',
  },
  op: {
    name: 'op',
    icon: 'optimism',
    ticker: 'OP',
    label: 'OP',
  },
  matic: {
    name: 'matic',
    icon: 'polygon',
    ticker: 'MATIC',
    label: 'MATIC',
  },
  xdai: {
    name: 'xdai',
    icon: 'xdai',
    ticker: 'XDAI',
    label: 'xDAI',
  },
  gno: {
    name: 'gno',
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
