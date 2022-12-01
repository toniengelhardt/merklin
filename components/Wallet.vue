<script setup lang="ts">
const rhStore = useRabbitholeStore()
const account = $computed(() => rhStore.accounts?.length ? rhStore.accounts[0] : undefined)
const display = $computed(() => account ? `${account.address.slice(0, 6)}...${account.address.slice(-4)}` : 'Connect Wallet')
</script>

<template>
  <div btn px-4>
    <Icon name="metamask" />
    <div ml-2>
      {{ display }}
    </div>
  </div>
</template>
