<script setup lang="ts">
const wallet = useWalletStore()
</script>

<template>
  <div v-if="wallet.address" btn-transparent px-2 md:px-4>
    <Icon name="dropdown" size="0.8rem" text-dim />
    <Icon name="wallet" size="1.4rem" mx-2 />
    <div self-center class="text-address">
      {{ displayAddress(wallet.address) }}
    </div>
  </div>
</template>
