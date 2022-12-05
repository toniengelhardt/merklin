<script setup lang="ts">
const rhStore = useRabbitholeStore()
const account = $computed(() => rhStore.accounts?.length ? rhStore.accounts[0] : undefined)
</script>

<template>
  <div btn-transparent px-4>
    <Icon name="dropdown" size="0.8rem" text-dim />
    <Icon name="metamask" mx-2 />
    <div self-center class="text-address">
      {{ account ? displayAddress(account.address) : 'Connect Wallet' }}
    </div>
  </div>
</template>
