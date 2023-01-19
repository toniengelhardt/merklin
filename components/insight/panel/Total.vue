<script setup lang="ts">
const addressStore = useAddressStore()
const transactionStore = useTransactionStore()

const assetTotal = $computed(() => {
  if (transactionStore.assetTotalEth) {
    return new Intl.NumberFormat(
      'en-US',
      {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        compactDisplay: 'long',
      },
    )
      .format(useEthToCurrency(transactionStore.assetTotalEth) ?? 0)
  }
  return '--'
})
</script>

<template>
  <div
    v-if="addressStore.activeAddresses.length"
    flex items-end text-3xl md:text-5xl text-gradient-green
    class="text-obscure"
  >
    <span font-black>{{ assetTotal }}</span>
  </div>
  <AppNoAddress v-else />
</template>
