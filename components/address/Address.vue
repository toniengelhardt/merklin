<script setup lang="ts">
defineProps<{
  address: Address
}>()
</script>

<template>
  <div flex items-center px-3px py-2px text-xs rounded-md bg-element>
    <AddressIcon :address="address" w-4 h-4 rounded lt-md:hidden />
    <AddressDisplay :address="address" mx-1 />
  </div>
</template>
