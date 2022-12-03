<script setup lang="ts">
defineProps<{
  address: Web3Address
}>()
</script>

<template>
  <div flex items-center bg-element px-4px py-1px rounded-md>
    <IconBlockies :seed="address" w-4 h-4 rounded />
    <span ml-1 text-sm>{{ displayAddress(address) }}</span>
  </div>
</template>
