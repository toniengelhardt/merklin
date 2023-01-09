<script setup lang="ts">
const ui = useUIStore()
const addressStore = useAddressStore()
</script>

<template>
  <div class="page" flex-row-reverse>
    <template v-if="addressStore.activeAddresses.length">
      <TransactionPanelHistory col-span-12 md:col-span-8 />
      <TransactionPanelInsights v-if="!ui.mobile" col-span-12 md:col-span-4 max-h-60 />
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
