<script setup lang="ts">
import { formatDistanceToNow } from 'date-fns'

const transactionStore = useTransactionStore()
const items = computed(() => transactionStore.transactionItems)

const firstTransactionAge = computed(() => {
  if (items.value?.length) {
    const firstTransaction = items.value.at(-1)
    if (firstTransaction?.timestamp)
      return formatDistanceToNow(firstTransaction.timestamp)

    return 'N/A'
  }
  return undefined
})
const lastTransactionAge = computed(() => {
  if (items.value?.length) {
    const lastTransaction = items.value[0]
    if (lastTransaction?.timestamp)
      return formatDistanceToNow(lastTransaction.timestamp)

    return 'N/A'
  }
  return undefined
})
</script>

<template>
  <div panel>
    <h2 panel-title mb-2 md:mb-4>
      Insights
    </h2>
    <div v-if="items?.length" grid grid-cols-2 gap-2 md:gap-4 pb-2>
      <div>
        <div class="insights-label">
          Transaction count
        </div>
        <div class="insights-value">
          {{ items?.length ?? 0 }}
        </div>
      </div>
      <div>
        <div class="insights-label">
          Failure rate
        </div>
        <div class="insights-value">
          N/A
        </div>
      </div>
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
    <div v-else text-dim italic>
      No insights yet...
    </div>
  </div>
</template>
