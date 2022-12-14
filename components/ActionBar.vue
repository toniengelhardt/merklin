<script setup lang="ts">
import { useConnect } from 'vagmi'

const { isConnected } = useConnect()
</script>

<template>
  <div h-16 px-4 flex items-center>
    <div flex-1>
      <div v-if="isConnected" flex items-center px-3 box-border>
        <NetworkInfo />
        <GasPrice pl-6 />
      </div>
    </div>
    <div grid grid-flow-col gap-2>
      <template v-if="isConnected">
        <Currency />
        <Network />
        <Wallet />
      </template>
      <AccountMenu />
    </div>
  </div>
</template>
