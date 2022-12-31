<script setup lang="ts">
const wallet = useWalletStore()
const networkStore = useNetworkStore()
const gasPrice = $computed(() => wallet?.networkName && networkStore ? networkStore[wallet.networkName].gasPrice : undefined)
</script>

<template>
  <div flex items-center>
    <Icon name="gas" />
    <div ml-2 text-xs text-dim>
      {{ gasPrice ? `${gasPrice} gwei` : '...' }}
    </div>
  </div>
</template>
