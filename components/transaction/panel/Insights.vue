<script setup lang="ts">
import { formatDistanceToNow } from 'date-fns'

const props = defineProps<{
  items?: TransactionItem[]
}>()

const firstTransactionAge = $computed(() => {
  if (props.items?.length) {
    const firstTransaction = props.items.at(-1)
    if (firstTransaction?.timestamp)
      return formatDistanceToNow(firstTransaction.timestamp)

    return 'N/A'
  }
  return undefined
})
const lastTransactionAge = $computed(() => {
  if (props.items?.length) {
    const lastTransaction = props.items[0]
    if (lastTransaction?.timestamp)
      return formatDistanceToNow(lastTransaction.timestamp)

    return 'N/A'
  }
  return undefined
})
</script>

<template>
  <div panel>
    <h2 panel-title>
      Insights
    </h2>
    <div mt-4 grid grid-cols-2>
      <div>
        <div class="insights-label">
          First transaction
        </div>
        <div class="insights-value">
          {{ firstTransactionAge }} ago
        </div>
      </div>
      <div>
        <div class="insights-label">
          Last transaction
        </div>
        <div class="insights-value">
          {{ lastTransactionAge }} ago
        </div>
      </div>
    </div>
  </div>
</template>
