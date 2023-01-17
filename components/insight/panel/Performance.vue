<script setup lang="ts">
const ui = useUIStore()
const addressStore = useAddressStore()
const transactionStore = useTransactionStore()
</script>

<template>
  <div panel flex flex-col md:h-61>
    <div flex justify-between mb-4>
      <h2 flex="~ 1" panel-title justify-between>
        Performance
      </h2>
      <div flex-center>
        <ChartOptionTimeframe v-model="ui.performanceChartOptions.timeframe" mr-2 />
        <ChartOptionUnit v-model="ui.performanceChartOptions.unit" />
      </div>
    </div>
    <div flex-1 flex-center>
      <template v-if="addressStore.activeAddresses.length">
        <AssetChartPerformance
          v-if="transactionStore.transactionItems?.length"
          :unit="ui.performanceChartOptions.unit"
          w-full
        />
        <AppNoTransactions v-else />
      </template>
      <AppNoAddress v-else />
    </div>
  </div>
</template>
