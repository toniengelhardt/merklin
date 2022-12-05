<script setup lang="ts">
defineProps<{
  address: Web3Address
}>()
</script>

<template>
  <div flex items-center bg-element px-3px py-2px rounded-md>
    <IconBlockies :seed="address" w-4 h-4 rounded />
    <span mx-1 text-xs class="text-address">
      {{ displayAddress(address) }}
    </span>
  </div>
</template>
