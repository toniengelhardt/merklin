<script setup lang="ts">
const ui = useUIStore()
const addressStore = useAddressStore()
const transactionStore = useTransactionStore()
const items = $computed(() => transactionStore.transactionItems)

const counts = $computed(() => {
  if (items) {
    let received = 0
    let sent = 0
    items?.forEach((item) => {
      if (item.type === 'receive')
        received++
      else if (item.type === 'send')
        sent++
    })
    return {
      received,
      sent,
    }
  }
})
</script>

<template>
  <div panel flex flex-col md:h-61>
    <div flex lt-md:flex-col justify-between mb-2>
      <h2 flex="1/3" panel-title m-0>
        Activity
      </h2>
      <div v-if="items && items.length" flex="~ 2/3" lt-md:justify-between>
        <div flex md:flex="1/3" justify-center items-center>
          <div flex items-center md:ml-2 text-xs text-dim>
            <div w-2 h-2 bg-green-500 rounded-full mr-1 lt-md:ml-1 />In ({{ counts?.received || '?' }})
          </div>
          <div flex items-center ml-4 text-xs text-dim>
            <div w-2 h-2 bg-orange-500 rounded-full mr-1 />Out ({{ counts?.sent || '?' }})
          </div>
        </div>
        <div md:flex="1/3" flex-center justify-end>
          <ChartOptionTimeframe v-model="ui.activityChartOptions.timeframe" />
        </div>
      </div>
    </div>
    <div flex-1 flex-center>
      <template v-if="addressStore.activeAddresses.length">
        <TransactionChartActivity v-if="items && items.length" :items="items" w-full />
        <AppNoTransactions v-else />
      </template>
      <AppNoAddress v-else />
    </div>
  </div>
</template>
