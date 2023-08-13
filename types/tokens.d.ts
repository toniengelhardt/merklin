declare type TokenName = 'btc' | 'eth' | 'op' | 'matic' | 'dai' | 'xdai' | 'gno'
declare type TokenTypes = ('utility' | 'governance' | 'stable' | 'security')[]
declare type TokenIcon = typeof string
declare type TokenTicker = 'BTC' | 'ETH' | 'OP' | 'MATIC' | 'DAI' | 'XDAI' | 'GNO'
declare type TokenPrice = number

declare interface Token {
  name: TokenName,
  types?: TokenTypes,
  icon?: TokenIcon,
  ticker: TokenTicker,
  label: string,
}
