<script setup lang="ts">
defineProps<{
  items?: TransactionItem
}>()
</script>

<template>
  <div panel>
    <div flex justify-between mb-2>
      <h2 flex="1/3" panel-title>
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
    <ChartTransactionTimeline v-if="items" :items="items" />
  </div>
</template>
