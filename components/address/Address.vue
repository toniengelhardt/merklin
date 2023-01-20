<script setup lang="ts">
defineProps<{
  address: Address
}>()
</script>

<template>
  <div flex items-center text-xs rounded-md>
    <AddressIcon :address="address" w-3 h-3 md:w-4 md:h-4 rounded-full />
    <AddressDisplay :address="address" ml-1 />
  </div>
</template>
