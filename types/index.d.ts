declare type Web3Address = string
declare type Web3Network = 'ethereum' | 'arbitrum' | 'optimism' | 'polygon' | 'zksync'

declare interface Web3Account {
  address: Web3Address,
  ens?: string | null,
  avatar?: string | null,
}
