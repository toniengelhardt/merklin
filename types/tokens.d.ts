declare type TokenName = 'eth' | 'op' | 'matic' | 'xdai'
declare type TokenIcon = typeof string
declare type TokenTicker = 'ETH' | 'OP' | 'MATIC' | 'XDAI'
declare type TokenPrice = BigNumber

declare interface Token {
  name: TokenName,
  icon: TokenIcon,
  ticker: TokenTicker,
  label: string,
}
