<script setup lang="ts">
const transactionStore = useTransactionStore()
const items = $computed(() => transactionStore.transactionItems)
const itemsReversed = $computed(() => items?.slice().reverse())
</script>

<template>
  <div panel>
    <div flex justify-between items-center mb-2>
      <h2 panel-title mb-0>
        History
      </h2>
      <div v-if="items" flex px-3 text-sm>
        <span text-dim>#</span>
        <span ml-1 font-bold>{{ items.length }}</span>
      </div>
    </div>
    <TransactionList v-if="items" :items="itemsReversed" />
    <Loading v-else />
  </div>
</template>
