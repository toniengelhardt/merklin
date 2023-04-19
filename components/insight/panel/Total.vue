<script setup lang="ts">
const addressStore = useAddressStore()
const transactionStore = useTransactionStore()
const walletStore = useWalletStore()

const assetTotal = computed(() => {
  if (transactionStore.assetTotalEth) {
    // Note: this is not working correctly if the network is not Ethereum.
    const total = (walletStore.balance !== undefined)
      ? Number(walletStore.balance)
      : transactionStore.assetTotalEth
    return new Intl.NumberFormat(
      'en-US',
      {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        compactDisplay: 'long',
        minimumFractionDigits: 2,
      },
    )
      .format(useEthToCurrency(total) ?? 0)
  }
  return '--'
})

onMounted(() => {
  walletStore.updateBalance()
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
