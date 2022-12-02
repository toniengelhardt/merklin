declare type ConnectionStatus = 'connected' | 'error'

declare type Web3Address = string
declare type Web3Network = 'ethereum' | 'arbitrum' | 'optimism' | 'polygon' | 'zksync'

declare type BlockTimestamp = number

declare interface Web3Account {
  address: Web3Address,
  ens?: string | null,
  avatar?: string | null,
}

declare type ItemIcon = { name: string, size?: string, class?: string }

declare interface MenuItem {
  icon: ItemIcon,
  label: string,
  link?: string,
  action?: () => {},
}

declare interface AppMenuItem {
  icon: ItemIcon,
  label: string,
  title: string,
  link: string,
}
