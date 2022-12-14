<script setup lang="ts">
const wallet = useWalletStore()
</script>

<template>
  <div btn-transparent px-4>
    <Icon name="dropdown" size="0.8rem" text-dim />
    <Icon name="metamask" mx-2 />
    <div self-center class="text-address">
      {{ wallet.address ? displayAddress(wallet.address) : 'Not connected...' }}
    </div>
  </div>
</template>
