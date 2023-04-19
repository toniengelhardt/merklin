import { formatUnits } from 'ethers'
import { defineStore } from 'pinia'
import { v4 as uuid4 } from 'uuid'
import { formatDate } from '~/utils/dates'

export const useTransactionStore = defineStore('transactions', {
  state: (): {
    transactionItems: TransactionItem[] | undefined
  } => ({
    transactionItems: undefined,
  }),
  actions: {
    async loadTransactions() {
      const ui = useUIStore()
      const addressStore = useAddressStore()
      const actionId = uuid4()
      ui.queueAction(actionId)
      const address = addressStore.activeAddresses.length
        ? addressStore.activeAddresses[0]
        : undefined
      if (address) {
        const transactions = await useTransactions()
        if (transactions !== undefined) {
          const items: TransactionItem[] = transactions.map((transaction) => {
            const type = getTransactionType(transaction, address)
            const timestamp = transaction.timestamp
              ? new Date(transaction.timestamp * 1000)
              : undefined
            const date = timestamp
              ? formatDate(timestamp)
              : undefined
            const item: TransactionItem = {
              timestamp,
              date,
              type,
              transaction,
            }
            return item
          })
          this.transactionItems = items
        }
      } else {
        this.transactionItems = undefined
      }
      ui.unqueueAction(actionId)
    },
  },
  getters: {
    transactionItemsReverse(state) {
      return state.transactionItems?.slice().reverse()
    },
    /** Returns total assets in [Wei]. */
    assetTotal(state) {
      if (state.transactionItems) {
        return state.transactionItems.reduce((total: bigint, item) => {
          if (item.timestamp) {
            if (item.type === 'send') {
              total = total - item.transaction.value.toBigInt()
            } else if (item.type === 'receive') {
              total = total + item.transaction.value.toBigInt()
            }
          }
          return total
        }, 0n)
      }
      return undefined
    },
    assetTotalEth(): number | undefined {
      return this.assetTotal ? +formatUnits(this.assetTotal, 'ether') : undefined
    },
  },
  persist: {
    paths: [

    ],
  },
})
