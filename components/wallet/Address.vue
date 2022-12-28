<script setup lang="ts">
defineProps<{
  address: Address
}>()
</script>

<template>
  <div flex items-center bg-element px-3px py-2px text-xs rounded-md>
    <IconBlockies :seed="address" w-4 h-4 rounded lt-md:hidden />
    <span mx-1>
      <span text-faint>0x</span>
      <span class="text-address">
        {{ displayAddress(address).slice(2) }}
      </span>
    </span>
  </div>
</template>
