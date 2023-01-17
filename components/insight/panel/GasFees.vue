<script setup lang="ts">
const ui = useUIStore()
const addressStore = useAddressStore()
const transactionStore = useTransactionStore()
</script>

<template>
  <div panel flex flex-col md:h-61>
    <div flex justify-between mb-2>
      <h2 flex-1 panel-title>
        Gas burn
      </h2>
      <div
        v-if="addressStore.activeAddresses.length && transactionStore.transactionItems?.length"
        flex-center text-sm text-dim font-bold
      >
        <ChartOptionTimeframe v-model="ui.gasBurnChartOptions.timeframe" mr-2 />
        <ChartOptionUnit v-model="ui.gasBurnChartOptions.unit" />
      </div>
    </div>
    <div flex-1 flex-center>
      <template v-if="addressStore.activeAddresses.length">
        <GasChartCumulativeGasFees
          v-if="transactionStore.transactionItems?.length"
          :unit="ui.gasBurnChartOptions.unit"
          w-full
        />
        <AppNoTransactions v-else />
      </template>
      <AppNoAddress v-else />
    </div>
  </div>
</template>
