declare type NetworkName = 'ethereum' | 'arbitrum' | 'optimism' | 'polygon' | 'zksync'
declare type NetworkLayer = 'L1' | 'L2' | 'L3'
declare type NetworkTechnology = { label: string, link: string }

declare interface NetworkInformation {
  icon: string,
  name: string,
  layer: NetworkLayer,
  technology: NetworkTechnology,
  tokenPrice: number | string,
  gasPrice: number | string,
  transactionCost: number | string,
  transactionsPerSecond: number | string,
  activeWalletCount: number | string,
}

declare type ConnectionStatus = 'connected' | 'error'

declare type BlockTimestamp = number

declare type EtherUnit = 'wei' | 'gwei' | 'ether'
