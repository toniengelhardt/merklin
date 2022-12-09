declare type TokenName = 'eth' | 'op' | 'matic' | 'xdai' | 'gno'
declare type TokenIcon = typeof string
declare type TokenTicker = 'ETH' | 'OP' | 'MATIC' | 'XDAI' | 'GNO'
declare type TokenPrice = BigNumber

declare interface Token {
  name: TokenName,
  icon: TokenIcon,
  ticker: TokenTicker,
  label: string,
}
