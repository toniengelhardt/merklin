declare type DatetimeString = string
declare type DateString = string
declare type TimeString = string

declare type ConnectionStatus = 'connected' | 'error'

declare type Web3Address = string
declare type Web3Network = 'ethereum' | 'arbitrum' | 'optimism' | 'polygon' | 'zksync'
declare type Web3Token = 'eth' | 'op' | 'matic' | 'gno'

declare type BlockTimestamp = number

declare interface Web3Account {
  address: Web3Address,
  ens?: string | null,
  avatar?: string | null,
}

declare type ItemIcon = {
  name: string,
  size?: string,
  class?: string
}

declare interface MenuItem {
  icon: ItemIcon,
  label: string,
  link?: string,
  external?: boolean,
  action?: () => {},
}

declare interface AppMenuItem {
  icon: ItemIcon,
  label: string,
  title: string,
  link: string,
}

declare type TransactionItemType = 'send' | 'receive' | '?'

declare type TransactionSignature = string // e.g. 0x99124868, first four bytes of transaction data.
declare type TransactionType = 0 | 1 | 2

declare interface TransactionItem {
  timestamp: Date | undefined,
  date: DateString | undefined,
  firstForDate: boolean,
  type: TransactionItemType,
  transaction: TransactionResponse,
}
