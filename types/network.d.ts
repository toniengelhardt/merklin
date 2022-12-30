declare type NetworkName = 'homestead' | 'arbitrum' | 'optimism' | 'matic' | 'gnosis' | 'zksync'
declare type ChainId = 1 | 42161 | 10 | 137 | 100 | 324
declare type NetworkIcon = typeof string
declare type NetworkLayer = 'L1' | 'L2' | 'L3'
declare type NetworkTechnology = { label: string, link: string }

declare interface Network {
  name: NetworkName
  chainId: ChainId
  icon: NetworkIcon
  label: string
  layer: NetworkLayer
  technology: NetworkTechnology
  token?: Token
}

declare interface NetworkData {
  status?: ConnectionStatus
  blocknumber?: number
  gasPrice?: number
  transactionCost?: number | string
  tps?: {
    max: number | string
    24: number | string
  },
  activeWalletCount?: number | string
}

declare interface NetworkInfo extends Network, NetworkData {}

declare type ConnectionStatus = 'connected' | 'error'

declare type BlockTimestamp = number

declare type EtherUnit = 'wei' | 'gwei' | 'ether'
