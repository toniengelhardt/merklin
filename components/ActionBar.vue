<script setup lang="ts">
const wallet = useWalletStore()
</script>

<template>
  <div h-16 px-4 flex items-center>
    <div flex-1>
      <div v-if="wallet.connected" flex items-center px-3 box-border>
        <NetworkInfo />
        <GasPrice pl-6 />
      </div>
    </div>
    <div grid grid-flow-col gap-2>
      <template v-if="wallet.connected">
        <!-- <Currency /> -->
        <Network />
        <Wallet />
      </template>
      <AccountMenu />
    </div>
  </div>
</template>
