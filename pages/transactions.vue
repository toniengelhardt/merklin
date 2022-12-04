<script setup lang="ts">
import type { TransactionResponse } from '@ethersproject/abstract-provider'
import { formatDate } from '~/utils/dates'

const rhStore = useRabbitholeStore()

let transactions = $ref<TransactionResponse[] | null>(null)

const account = $computed(() => rhStore.account)
const transactionItems = $computed(() => {
  if (account && transactions) {
    let prevDate: DateString | undefined
    const items: TransactionItem = transactions.map((transaction) => {
      const type = transaction.to?.toLowerCase() === account.address
        ? 'receive'
        : transaction.value._hex !== '0x00'
          ? 'send'
          : TransactionSignatureMap[transaction.data.slice(0, 10)]
      const timestamp = transaction.timestamp ? new Date(transaction.timestamp * 1000) : undefined
      const date = timestamp ? formatDate(timestamp) : undefined
      const firstForDate = date !== prevDate
      prevDate = date
      return {
        timestamp,
        date,
        firstForDate,
        type,
        transaction,
      }
    }).reverse()
    console.log(items)
    return items
  }
})

async function loadTrasactions() {
  transactions = await useTransactions() || []
}

onMounted(() => loadTrasactions())
</script>

<template>
  <div v-if="account" page>
    <div col-span-12 panel>
      <!-- <ChartBar :chart-data="chartData" height="12rem" /> -->
      <div flex justify-between mb-2>
        <div flex>
          <div flex items-center ml-2 text-xs text-dim>
            <div w-2 h-2 bg-green-500 rounded-full mr-1 />Received
          </div>
          <div flex items-center ml-4 text-xs text-dim>
            <div w-2 h-2 bg-orange-500 rounded-full mr-1 />Sent
          </div>
        </div>
        <div flex items-center text-sm>
          <div text-dim mr-2>
            30d
          </div>
          <div text-dim mr-2>
            90d
          </div>
          <div px-2 py-2px bg-element font-bold rounded-md>
            1y
          </div>
        </div>
      </div>
      <ChartTransactionTimeline v-if="transactionItems" :items="transactionItems" />
    </div>
    <div col-span-8 panel>
      <h2 mt-0 mb-2 text-faint>
        History
      </h2>
      <TransactionList :items="transactionItems" />
    </div>
    <div col-span-4 panel h-64>
      <h2 mt-0 mb-2 text-faint>
        Insights
      </h2>
    </div>
  </div>
  <Loading v-else />
</template>
