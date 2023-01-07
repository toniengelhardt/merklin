<script setup lang="ts">
const addressStore = useAddressStore()
</script>

<template>
  <div class="page">
    <template v-if="addressStore.activeAddresses.length">
      <TransactionPanelActivity col-span-12 md:col-span-8 />
      <TransactionPanelAddresses col-span-12 md:col-span-4 />
      <TransactionPanelHistory col-span-12 md:col-span-8 />
      <TransactionPanelInsights col-span-12 md:col-span-4 max-h-60 />
    </template>
    <PanelSelectAddress v-else col-span-12 md:col-span-4 md:h-61 />
  </div>
</template>

<style>
.insights-label {
  @apply text-sm text-dim font-bold;
}
.insights-value {
  @apply mt-1 text-sm;
}
</style>
