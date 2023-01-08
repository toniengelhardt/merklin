<script setup lang="ts">
defineProps<{
  address: Address
}>()
</script>

<template>
  <div flex items-center font-mono text-faint class="text-obscure">
    0x<span mr-0.5 text-base>{{ address.slice(2, 6) }}</span>…<span ml-0.5 text-base>{{ address.slice(-4) }}</span>
  </div>
</template>
