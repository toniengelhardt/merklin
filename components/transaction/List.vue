<script setup lang="ts">
import type { TransactionResponse } from '@ethersproject/abstract-provider'
import Approve from '~/components/transaction/item/Approve.vue'
import Send from '~/components/transaction/item/Send.vue'
import Receive from '~/components/transaction/item/Receive.vue'
import Swap from '~/components/transaction/item/Swap.vue'
import Unknown from '~/components/transaction/item/Unknown.vue'
import { formatDate } from '~/utils/dates'

const rhStore = useRabbitholeStore()

const compMap: Record<TransactionSignature, any> = {
  approve: Approve,
  send: Send,
  receive: Receive,
  swap: Swap,
}

let transactions = $ref<TransactionResponse[] | null>(null)

const account = $computed(() => rhStore.account)
const transactionItems = $computed(() => {
  if (account && transactions) {
    let prevDate: DateString | undefined
    const items: TransactionItem = transactions.reverse().map((transaction) => {
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
    })
    // console.log(items)
    return items
  }
})

async function loadTrasactions() {
  transactions = await useTransactions() || []
}

onMounted(() => loadTrasactions())
</script>

<template>
  <div v-if="transactionItems">
    <template
      v-for="item in transactionItems"
      :key="item.transaction.hash"
    >
      <div v-if="item.firstForDate" mt-4 mb-2 px-4 font-bold>
        {{ displayDate(item.timestamp) }}
      </div>
      <component :is="item.type ? compMap[item.type as TransactionSignature] : Unknown" :item="item" />
    </template>
  </div>
  <Loading v-else />
</template>
