<script setup lang="ts">
defineProps<{
  items?: TransactionItem[]
}>()
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
    <TransactionList v-if="items" :items="items" />
    <Loading v-else />
  </div>
</template>
