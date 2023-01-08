<script setup lang="ts">
const wallet = useWalletStore()
</script>

<template>
  <div flex items-center>
    <!-- <Icon name="gas" /> -->
    <div text-xs text-dim>
      {{ useGasPriceFormatted(wallet.networkName || 'homestead', '...', true).value }}
    </div>
  </div>
</template>
