<script setup lang="ts">
import type { ethers } from 'ethers'

let transactions = ref<TransactionRespose[] | null>(null)

onMounted(() => {
  useTransactions()
    .then(_transactions => transactions = _transactions)
  console.log(transactions)
})
</script>

<template>
  <div v-if="transactions">
    <div
      v-for="transaction in transactions"
      :key="transaction.hash"
      mb-2
    >
      <div>{{ transaction.hash }}</div>
      <div>{{ formatTimestamp(transaction.timestamp) }}</div>
      <div>{{ transaction.from }} >> {{ transaction.to }}</div>
    </div>
  </div>
</template>
