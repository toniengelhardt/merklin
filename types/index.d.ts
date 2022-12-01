declare type ConnectionStatus = 'connected' | 'error'

declare type Web3Address = string
declare type Web3Network = 'ethereum' | 'arbitrum' | 'optimism' | 'polygon' | 'zksync'

declare type BlockTimestamp = number

declare interface Web3Account {
  address: Web3Address,
  ens?: string | null,
  avatar?: string | null,
}

declare type ItemIcon = { name: string, class?: string }
declare type ItemLink = string

declare interface MenuItem {
  label: string,
  icon: ItemIcon,
  link: ItemLink,
  action: () => {},
}
