declare type TransactionItemType = 'send' | 'receive' | '?'

declare type TransactionSignature = string // e.g. 0x99124868, first four bytes of transaction data.
declare type TransactionType = 0 | 1 | 2

declare interface TransactionItem {
  timestamp: Date | undefined,
  date: DateString | undefined,
  // firstForDate: boolean,
  type: TransactionItemType,
  transaction: import('@ethersproject/abstract-provider').TransactionResponse,
}
