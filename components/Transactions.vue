<script setup lang="ts">
import type { ethers } from 'ethers'
import { logger } from 'ethers'

let transactions = ref<ethers.Transaction[] | null>(null)

onMounted(() => {
  useTransactions()
    .then(_transactions => transactions = _transactions as any)
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
      <div>{{ transaction.from }} >> {{ transaction.to }}</div>
    </div>
  </div>
</template>
