<script setup lang="ts">
const wallet = useWalletStore()
</script>

<template>
  <div v-if="wallet.connected" class="page">
    <TransactionPanelActivity col-span-12 md:col-span-8 />
    <TransactionPanelAddresses col-span-12 md:col-span-4 />
    <TransactionPanelHistory col-span-12 md:col-span-8 />
    <TransactionPanelInsights col-span-12 md:col-span-4 max-h-60 />
  </div>
  <Loading v-else />
</template>

<style>
.insights-label {
  @apply text-sm text-dim font-bold;
}
.insights-value {
  @apply mt-1 text-sm;
}
</style>
