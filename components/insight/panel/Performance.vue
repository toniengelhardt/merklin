<script setup lang="ts">
const ui = useUIStore()
const addressStore = useAddressStore()
const transactionStore = useTransactionStore()
</script>

<template>
  <div panel flex flex-col md:h-61>
    <div flex justify-between mb-2>
      <h2 flex="~ 1/2" panel-title justify-between>
        Performance
      </h2>
      <div
        v-if="addressStore.activeAddresses.length && transactionStore.transactionItems?.length"
        flex="~ 1/2" justify-end items-center mb-2 text-sm text-dim font-bold
      >
        <div
          flex-center px-2 h-6 rounded-md mr-2 cursor-pointer
          :class="ui.performanceChartUnit === 'eth' ? 'bg-element text-base' : undefined"
          @click="ui.performanceChartUnit = 'eth'"
        >
          <span>Ξ</span><span ml-1>ETH</span>
        </div>
        <div
          flex-center px-2 h-6 rounded-md mr-1 cursor-pointer
          :class="ui.performanceChartUnit === 'currency' ? 'bg-element text-base' : undefined"
          @click="ui.performanceChartUnit = 'currency'"
        >
          <span>$</span><span ml-1>USD</span>
        </div>
      </div>
    </div>
    <div flex-1 flex-center>
      <template v-if="addressStore.activeAddresses.length">
        <AssetChartPerformance
          v-if="transactionStore.transactionItems?.length"
          :unit="ui.performanceChartUnit"
          w-full
        />
        <AppNoTransactions v-else />
      </template>
      <AppNoAddress v-else />
    </div>
  </div>
</template>
