<script setup lang="ts">
import type { TransactionResponse } from '@ethersproject/abstract-provider'
import { formatDate } from '~/utils/dates'

const rhStore = useRabbitholeStore()

let transactions = $ref<TransactionResponse[] | null>(null)

const account = $computed(() => rhStore.account)
const transactionItems = $computed(() => {
  if (account && transactions) {
    let prevDate: DateString | undefined
    const items: TransactionItem[] = transactions.map((transaction) => {
      const type = (
        transaction.to?.toLowerCase() === account.address
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
    }).reverse()
    // console.log(items)
    return items
  }
  return undefined
})

async function loadTrasactions() {
  transactions = await useTransactions() || []
}

onMounted(() => loadTrasactions())
</script>

<template>
  <div v-if="account" page>
    <TransactionPanelActivity :items="transactionItems" col-span-8 />
    <TransactionPanelAddresses :items="transactionItems" col-span-4 />
    <TransactionPanelHistory :items="transactionItems" col-span-8 />
    <TransactionPanelInsights :items="transactionItems" col-span-4 max-h-60 />
  </div>
  <Loading v-else />
</template>

<style>
.insights-label {
  @apply text-sm text-dim font-bold;
}
.insights-value {
  @apply mt-1 text-sm;
}
</style>
