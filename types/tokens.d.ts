declare type TokenName = 'eth' | 'op' | 'matic' | 'xdai' | 'gno'
declare type TokenTypes = ('utility' | 'governance' | 'stable' | 'security')[]
declare type TokenIcon = typeof string
declare type TokenTicker = 'ETH' | 'OP' | 'MATIC' | 'XDAI' | 'GNO'
declare type TokenPrice = BigNumber

declare interface Token {
  name: TokenName,
  types?: TokenTypes,
  icon?: TokenIcon,
  ticker: TokenTicker,
  label: string,
}
