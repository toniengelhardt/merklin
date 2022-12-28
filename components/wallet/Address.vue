<script setup lang="ts">
defineProps<{
  address: Address
}>()
</script>

<template>
  <div flex items-center bg-element px-3px py-2px rounded-md>
    <IconBlockies :seed="address" w-4 h-4 rounded lt-md:hidden />
    <span text-faint>0x</span>
    <span mx-1 text-xs class="text-address">
      {{ displayAddress(address).slice(2) }}
    </span>
  </div>
</template>
