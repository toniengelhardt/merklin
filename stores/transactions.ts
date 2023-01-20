import { BigNumber, utils as ethersUtils } from 'ethers'
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
          // let prevDate: DateString | undefined
          const items: TransactionItem[] = transactions.reverse().map((transaction) => {
            const type = getTransactionType(transaction, address)
            const timestamp = transaction.timestamp
              ? new Date(transaction.timestamp * 1000)
              : undefined
            const date = timestamp
              ? formatDate(timestamp)
              : undefined
            // const firstForDate = date !== prevDate
            // prevDate = date
            const item: TransactionItem = {
              timestamp,
              date,
              // firstForDate,
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
    /** Returns total assets in [Wei]. */
    assetTotal(state) {
      if (state.transactionItems) {
        return state.transactionItems.reduce((total: BigNumber, item) => {
          if (item.timestamp) {
            if (item.type === 'send') {
              total = total.sub(item.transaction.value)
            } else if (item.type === 'receive') {
              total = total.add(item.transaction.value)
            }
          }
          return total
        }, BigNumber.from('0'))
      }
      return undefined
    },
    assetTotalEth(): number | undefined {
      return this.assetTotal ? +ethersUtils.formatUnits(this.assetTotal, 'ether') : undefined
    },
  },
  persist: {
    paths: [

    ],
  },
})
