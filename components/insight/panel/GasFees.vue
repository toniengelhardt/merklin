<script setup lang="ts">
const addressStore = useAddressStore()
</script>

<template>
  <div panel flex flex-col md:h-61>
    <h2 panel-title>
      Gas burn
    </h2>
    <div py-2 flex-1 flex-center>
      <GasChartCumulativeFees v-if="addressStore.activeAddresses.length" w-full />
      <AppNoAddress v-else />
    </div>
  </div>
</template>
