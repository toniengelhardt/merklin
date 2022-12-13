declare type TokenName = 'eth' | 'op' | 'matic' | 'xdai' | 'gno'
declare type TokenType = 'util' | 'gov' | 'stable' | 'sec'  | TokenType[]
declare type TokenIcon = typeof string
declare type TokenTicker = 'ETH' | 'OP' | 'MATIC' | 'XDAI' | 'GNO'
declare type TokenPrice = BigNumber

declare interface Token {
  name: TokenName,
  type?: TokenType,
  icon?: TokenIcon,
  ticker: TokenTicker,
  label: string,
}
