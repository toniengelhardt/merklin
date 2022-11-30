<script setup lang="ts">
const { wallets } = await useProvider()
const activeAddress = $computed(() => wallets?.length ? wallets[0] : undefined)
const activeAddressDisplay = $computed(() => activeAddress ? `${activeAddress.slice(0, 6)}...${activeAddress.slice(-4)}` : 'Connect Wallet')
</script>

<template>
  <div btn px-4>
    <Icon name="metamask" />
    <div ml-2>
      {{ activeAddressDisplay }}
    </div>
  </div>
</template>
