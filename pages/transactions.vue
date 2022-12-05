<script setup lang="ts">
import type { TransactionResponse } from '@ethersproject/abstract-provider'
import { formatDistanceToNow } from 'date-fns'
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
    console.log(items)
    return items
  }
  return undefined
})
const walletAge = $computed(() => {
  if (transactionItems?.length) {
    const firstTransaction = transactionItems.at(-1)
    if (firstTransaction?.timestamp)
      return formatDistanceToNow(firstTransaction.timestamp)

    return 'N/A'
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
    <div col-span-8 panel>
      <!-- <ChartBar :chart-data="chartData" height="12rem" /> -->
      <div flex justify-between mb-2>
        <h2 flex="1/3" mt-0 mb-2 text-faint>
          Activity
        </h2>
        <div flex="~ 1/3" justify-center items-center>
          <div flex items-center ml-2 text-xs text-dim>
            <div w-2 h-2 bg-green-500 rounded-full mr-1 />Received
          </div>
          <div flex items-center ml-4 text-xs text-dim>
            <div w-2 h-2 bg-orange-500 rounded-full mr-1 />Sent
          </div>
        </div>
        <div flex="~ 1/3" justify-end items-center text-sm>
          <div text-dim mr-3>
            30d
          </div>
          <div text-dim mr-3>
            3m
          </div>
          <div px-2 py-2px bg-element font-bold rounded-md mr-2>
            1y
          </div>
          <div text-dim mr-3>
            max
          </div>
        </div>
      </div>
      <ChartTransactionTimeline
        v-if="transactionItems"
        :items="transactionItems"
      />
    </div>
    <div col-span-4 panel>
      <h2 mt-0 mb-2 text-faint>
        Type
      </h2>
      <p text-dim text-sm>
        <i>Histogram with transaction type...</i>
      </p>
    </div>
    <div col-span-8 panel>
      <div flex justify-between items-center mb-2>
        <h2 m-0 text-faint>
          History
        </h2>
        <div flex px-3 text-s>
          <span text-dim>#</span>
          <span ml-1 font-bold>{{ transactionItems?.length || 0 }}</span>
        </div>
      </div>
      <TransactionList :items="transactionItems" />
    </div>
    <div col-span-4 panel h-64>
      <h2 mt-0 mb-2 text-faint>
        Insights
      </h2>
      <div mt-4 grid grid-cols-2>
        <div>
          <div class="insights-label">
            First transaction
          </div>
          <div class="insights-value">
            {{ walletAge }} ago
          </div>
        </div>
      </div>
    </div>
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
