import type { TransactionResponse } from '@ethersproject/abstract-provider'
import type { Transaction } from '@ethersproject/transactions'

export function getTransactionType(transaction: Transaction | TransactionResponse, address: Address) {
  return (
    transaction.to?.toLowerCase() === address.toLocaleLowerCase()
      ? 'receive'
      : transaction.value._hex !== '0x00'
        ? 'send'
        : TransactionSignatureMap[transaction.data.slice(0, 10)]
  ) as TransactionItemType
}
