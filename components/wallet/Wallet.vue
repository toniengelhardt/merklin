<script setup lang="ts">
const accountStore = useAccountStore()
</script>

<template>
  <div btn-transparent px-4>
    <Icon name="dropdown" size="0.8rem" text-dim />
    <Icon name="metamask" mx-2 />
    <div self-center class="text-address">
      {{ accountStore.activeAccount ? displayAddress(accountStore.activeAccount.address) : 'Connect Wallet' }}
    </div>
  </div>
</template>
