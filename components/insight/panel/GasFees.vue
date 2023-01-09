<script setup lang="ts">
const addressStore = useAddressStore()
const transactionStore = useTransactionStore()
</script>

<template>
  <div panel flex flex-col md:h-61>
    <h2 panel-title flex justify-between>
      <span>Gas burn</span>
      <!-- <span class="mx-1 text-1.5rem text-base">🐉</span> -->
    </h2>
    <div py-2 flex-1 flex-center>
      <template v-if="addressStore.activeAddresses.length">
        <GasChartCumulativeFees v-if="transactionStore.transactionItems?.length" w-full />
        <AppNoTransactions v-else />
      </template>
      <AppNoAddress v-else />
    </div>
  </div>
</template>
