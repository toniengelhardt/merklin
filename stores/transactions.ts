import { defineStore } from 'pinia'
import { formatDate } from '~/utils/dates'

export const useTransactionStore = defineStore('transactions', {
  state: (): {
    transactionItems: TransactionItem[] | undefined
  } => {
    return {
      transactionItems: undefined,
    }
  },
  actions: {
    async loadTransactions() {
      const transactions = await useTransactions()
      if (transactions !== undefined) {
        const wallet = useWalletStore()
        let prevDate: DateString | undefined
        const items: TransactionItem[] = transactions.map((transaction) => {
          const type = (
            transaction.to?.toLowerCase() === wallet.address?.toLocaleLowerCase()
              ? 'receive'
              : transaction.value._hex !== '0x00'
                ? 'send'
                : TransactionSignatureMap[transaction.data.slice(0, 10)]
          ) as TransactionItemType
          const timestamp = transaction.timestamp
            ? new Date(transaction.timestamp * 1000)
            : undefined
          const date = timestamp
            ? formatDate(timestamp)
            : undefined
          const firstForDate = date !== prevDate
          prevDate = date
          const item: TransactionItem = {
            timestamp,
            date,
            firstForDate,
            type,
            transaction,
          }
          return item
        })
        this.transactionItems = items
      }
    },
  },
  persist: {
    paths: [

    ],
  },
})
